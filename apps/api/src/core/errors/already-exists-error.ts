import { UseCaseError } from "../types/use-case-error";

export class AlreadyExistsError extends Error implements UseCaseError {
	constructor(identifier: string) {
		super(
			`${identifier} já existe. Por favor, tente utilizar informações diferentes.`,
		);
	}
}
