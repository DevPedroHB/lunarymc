import { DomainEvent } from "@/core/events/domain-event";
import { User } from "../entities/user";

export class CreateUserEvent implements DomainEvent {
	public occurredAt: Date;
	private aggregate: User;

	constructor(aggregate: User) {
		this.occurredAt = new Date();
		this.aggregate = aggregate;
	}

	public getAggregateId() {
		return this.aggregate.id;
	}
}
