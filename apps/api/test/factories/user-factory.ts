import { UniqueEntityId } from "@/core/entities/unique-entity-id";
import { UsersRepository } from "@/domain/account/application/repositories/users-repository";
import { IUser, User } from "@/domain/account/enterprise/entities/user";
import { fakerPT_BR as faker } from "@faker-js/faker";
import { Injectable } from "@nestjs/common";

export function makeUser(props: Partial<IUser> = {}, id?: UniqueEntityId) {
	const name = faker.person.fullName();

	const user = User.create(
		{
			name,
			email: faker.internet.email({
				firstName: name.split(" ")[0],
				lastName: name.split(" ")[1],
			}),
			avatarUrl: faker.image.avatar(),
			...props,
		},
		id,
	);

	return user;
}

@Injectable()
export class UserFactory {
	constructor(private usersRepository: UsersRepository) {}

	async makeUser(props: Partial<IUser> = {}, id?: UniqueEntityId) {
		const user = makeUser(props, id);

		await this.usersRepository.create(user);

		return user;
	}
}
