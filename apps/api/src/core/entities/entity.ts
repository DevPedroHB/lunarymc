import { UniqueEntityId } from "./unique-entity-id";

/**
 * Classe base abstrata para todas as entidades de domínio
 * @template T Tipo das propriedades da entidade
 */
export abstract class Entity<T> {
	private readonly _id: UniqueEntityId;
	protected readonly props: T;

	protected constructor(props: T, id?: UniqueEntityId) {
		this._id = id ?? new UniqueEntityId();
		this.props = props;
	}

	get id() {
		return this._id;
	}

	public equals(entity: Entity<unknown>) {
		if (this === entity) {
			return true;
		}

		if (this.id.equals(entity.id)) {
			return true;
		}

		return false;
	}
}
