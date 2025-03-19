import { DomainEvents } from "@/core/events/domain-events";
import { filterItemsByFields } from "@/core/functions/filter-items-by-fields";
import { paginateItems } from "@/core/functions/paginate-items";
import { sortItems } from "@/core/functions/sort-items";
import { FetchOptions } from "@/core/types/fetch-options";
import {
	UserFields,
	UsersRepository,
} from "@/domain/account/application/repositories/users-repository";
import { User } from "@/domain/account/enterprise/entities/user";

export class InMemoryUsersRepository implements UsersRepository {
	public items: User[] = [];

	async fetchUsers({ fields, orderBy, pagination }: FetchOptions<UserFields>) {
		let users = this.items;

		if (fields) {
			users = filterItemsByFields(users, fields);
		}

		if (orderBy) {
			users = sortItems(users, orderBy);
		}

		if (pagination) {
			users = paginateItems(users, pagination);
		}

		return users;
	}

	async findUser(fields: UserFields) {
		const filteredUsers = filterItemsByFields(this.items, fields);

		if (filteredUsers.length === 0) {
			return null;
		}

		return filteredUsers[0];
	}

	async create(user: User) {
		this.items.push(user);

		DomainEvents.dispatchEventsForAggregate(user.id);
	}

	async update(user: User) {
		const index = this.items.findIndex((item) => item.id.equals(user.id));

		if (index === -1) {
			return;
		}

		this.items[index] = user;

		DomainEvents.dispatchEventsForAggregate(user.id);
	}

	async delete(user: User) {
		const index = this.items.findIndex((item) => item.id.equals(user.id));

		if (index === -1) {
			return;
		}

		this.items.splice(index, 1);

		DomainEvents.dispatchEventsForAggregate(user.id);
	}
}
