import { randomUUID } from "node:crypto";

/**
 * Representa um identificador único para uma entidade.
 */
export class UniqueEntityId {
	private readonly _id: string;

	constructor(id?: string) {
		this._id = id ?? randomUUID();
	}

	get id() {
		return this._id;
	}

	public equals(uniqueEntityId: UniqueEntityId) {
		if (this === uniqueEntityId) {
			return true;
		}

		if (this.id === uniqueEntityId.id) {
			return true;
		}

		return false;
	}
}
