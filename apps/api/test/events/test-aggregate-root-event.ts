import { DomainEvent } from "@/core/events/domain-event";
import { TestAggregateRoot } from "@test/entities/test-aggregate-root";

export class TestAggregateRootEvent implements DomainEvent {
	public occurredAt: Date;
	private aggregate: TestAggregateRoot;

	constructor(aggregate: TestAggregateRoot) {
		this.occurredAt = new Date();
		this.aggregate = aggregate;
	}

	public getAggregateId() {
		return this.aggregate.id;
	}
}
