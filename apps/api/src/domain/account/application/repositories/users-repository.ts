import { FetchOptions } from "@/core/types/fetch-options";
import { User as IUser } from "@lunarymc/types";
import { User } from "../../enterprise/entities/user";

export type UserFields = Partial<IUser>;

export abstract class UsersRepository {
	abstract fetchUsers(options: FetchOptions<UserFields>): Promise<User[]>;
	abstract findUser(fields: UserFields): Promise<User | null>;
	abstract create(user: User): Promise<void>;
	abstract update(user: User): Promise<void>;
	abstract delete(user: User): Promise<void>;
}
