import { AggregateRoot } from "@/core/entities/aggregate-root";
import { UniqueEntityId } from "@/core/entities/unique-entity-id";
import { Optional } from "@/core/types/optional";
import { TestAggregateRootEvent } from "@test/events/test-aggregate-root-event";

export interface ITestAggregateRoot {
	name: string;
	email: string;
	password: string;
	createdAt: Date;
	updatedAt?: Date | null;
}

export class TestAggregateRoot extends AggregateRoot<ITestAggregateRoot> {
	get name() {
		return this.props.name;
	}

	set name(name: string) {
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

	get password() {
		return this.props.password;
	}

	set password(password: string) {
		this.props.password = password;

		this.update();
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

	public addNewDomainEvent() {
		this.addDomainEvent(new TestAggregateRootEvent(this));
	}

	static create(
		props: Optional<ITestAggregateRoot, "createdAt">,
		id?: UniqueEntityId,
	) {
		const testAggregateRoot = new TestAggregateRoot(
			{
				...props,
				createdAt: props.createdAt ?? new Date(),
			},
			id,
		);

		if (!id) {
			testAggregateRoot.addDomainEvent(
				new TestAggregateRootEvent(testAggregateRoot),
			);
		}

		return testAggregateRoot;
	}
}
