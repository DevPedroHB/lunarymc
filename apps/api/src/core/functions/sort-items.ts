import { SortOrder } from "../types/sort-order";

/**
 * Sorts the given items array by the given orderBy object.
 * Each property in the orderBy object corresponds to a field in the items array
 * and the value of the property determines the order of the items (asc or desc).
 *
 * @example
 * sortItems(
 *   [
 *     { id: 1, name: "John" },
 *     { id: 2, name: "Alice" },
 *     { id: 3, name: "Bob" }
 *   ],
 *   { id: "asc", name: "desc" }
 * )
 * // returns [{ id: 1, name: "John" }, { id: 2, name: "Alice" }, { id: 3, name: "Bob" }]
 *
 * @param {T[]} items
 * @param {SortOrder<T>} orderBy
 * @returns {T[]}
 */
export function sortItems<T>(items: T[], orderBy: SortOrder<T>) {
	if (!orderBy || Object.keys(orderBy).length === 0) {
		return items;
	}

	return [...items].sort((a, b) => {
		for (const [field, order] of Object.entries(orderBy)) {
			const fieldA = a[field as keyof T];
			const fieldB = b[field as keyof T];

			if (fieldA === fieldB) continue;

			const comparison = fieldA < fieldB ? -1 : 1;

			return order === "asc" ? comparison : -comparison;
		}

		return 0;
	});
}
