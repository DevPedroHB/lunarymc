import { AggregateRoot } from "@/core/entities/aggregate-root";
import { UniqueEntityId } from "@/core/entities/unique-entity-id";
import { Optional } from "@/core/types/optional";
import { User as UserInterface } from "@lunarymc/types";
import { CreateUserEvent } from "../events/create-user-event";

export interface IUser extends Omit<UserInterface, "id"> {}

export class User extends AggregateRoot<IUser> {
	get name() {
		return this.props.name;
	}

	set name(name: string | null | undefined) {
		this.props.name = name;

		this.update();
	}

	get email() {
		return this.props.email;
	}

	set email(email: string) {
		this.props.email = email;

		this.update();
	}

	get emailVerifiedAt() {
		return this.props.emailVerifiedAt;
	}

	get avatarUrl() {
		return this.props.avatarUrl;
	}

	set avatarUrl(avatarUrl: string | null | undefined) {
		this.props.avatarUrl = avatarUrl;
	}

	get createdAt() {
		return this.props.createdAt;
	}

	get updatedAt() {
		return this.props.updatedAt;
	}

	private update() {
		this.props.updatedAt = new Date();
	}

	public verifyEmail() {
		this.props.emailVerifiedAt = new Date();

		this.update();
	}

	static create(props: Optional<IUser, "createdAt">, id?: UniqueEntityId) {
		const user = new User(
			{
				...props,
				createdAt: props.createdAt ?? new Date(),
			},
			id,
		);

		if (!id) {
			user.addDomainEvent(new CreateUserEvent(user));
		}

		return user;
	}
}
