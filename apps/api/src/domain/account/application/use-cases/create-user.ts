import { Either, error, success } from "@/core/either";
import { AlreadyExistsError } from "@/core/errors/already-exists-error";
import { User } from "../../enterprise/entities/user";
import { UsersRepository } from "../repositories/users-repository";

interface CreateUserUseCaseRequest {
	name?: string | null;
	email: string;
	emailVerifiedAt?: Date | null;
	avatarUrl?: string | null;
}

type CreateUserUseCaseResponse = Either<
	AlreadyExistsError,
	{
		user: User;
	}
>;

export class CreateUserUseCase {
	constructor(private readonly usersRepository: UsersRepository) {}

	async execute({
		name,
		email,
		emailVerifiedAt,
		avatarUrl,
	}: CreateUserUseCaseRequest): Promise<CreateUserUseCaseResponse> {
		const userWithSameEmail = await this.usersRepository.findUser({ email });

		if (userWithSameEmail) {
			return error(new AlreadyExistsError("Usuário"));
		}

		const user = User.create({
			name,
			email,
			emailVerifiedAt,
			avatarUrl,
		});

		await this.usersRepository.create(user);

		return success({
			user,
		});
	}
}
