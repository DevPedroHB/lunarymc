/**
 * Filters the given items array by the given fields object.
 * Each property in the fields object corresponds to a field in the items array
 * and the value of the property determines whether the item is included in the
 * result or not.
 *
 * @example
 * filterItemsByFields(
 *   [
 *     { id: 1, name: "John" },
 *     { id: 2, name: "Alice" },
 *     { id: 3, name: "Bob" }
 *   ],
 *   { id: 1, name: "John" }
 * )
 * // returns [{ id: 1, name: "John" }]
 *
 * @param {E[]} items
 * @param {Partial<T>} fields
 * @returns {E[]}
 */
export function filterItemsByFields<E, T>(items: E[], fields: Partial<T>) {
	if (!fields || Object.keys(fields).length === 0) {
		return items;
	}

	return items.filter((item) => {
		return Object.entries(fields).every(([key, value]) => {
			return item[key as keyof E] === value;
		});
	});
}
