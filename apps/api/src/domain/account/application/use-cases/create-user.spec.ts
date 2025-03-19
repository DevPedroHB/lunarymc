import { AlreadyExistsError } from "@/core/errors/already-exists-error";
import { UserFactory, makeUser } from "@test/factories/user-factory";
import { InMemoryUsersRepository } from "@test/repositories/in-memory-users-repository";
import { CreateUserUseCase } from "./create-user";

let inMemoryUsersRepository: InMemoryUsersRepository;
let createUserUseCase: CreateUserUseCase;
let userFactory: UserFactory;

describe("Create user", () => {
	beforeEach(() => {
		inMemoryUsersRepository = new InMemoryUsersRepository();
		createUserUseCase = new CreateUserUseCase(inMemoryUsersRepository);
		userFactory = new UserFactory(inMemoryUsersRepository);
	});

	it("should be able to create a user", async () => {
		const user = makeUser();

		const result = await createUserUseCase.execute(user);

		expect(result.isSuccess()).toBeTruthy();
		expect(inMemoryUsersRepository.items).toHaveLength(1);
	});

	it("should not be able to create a user with the same email", async () => {
		const user1 = await userFactory.makeUser();

		const user2 = makeUser({
			email: user1.email,
		});

		const result = await createUserUseCase.execute(user2);

		expect(result.isError()).toBeTruthy();
		expect(result.value).toBeInstanceOf(AlreadyExistsError);
		expect(inMemoryUsersRepository.items).toHaveLength(1);
	});
});
