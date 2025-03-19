/**
 * Paginates the given array of items based on the provided pagination settings.
 *
 * @param items - The array of items to paginate.
 * @param pagination - An object containing pagination settings with 'page' and 'perPage' properties.
 * @returns A subarray of items corresponding to the specified page and number of items per page.
 */
export function paginateItems<T>(
	items: T[],
	pagination: { page: number; perPage: number },
) {
	if (!pagination) {
		return items;
	}

	const { page, perPage } = pagination;
	const start = (page - 1) * perPage;
	const end = start + perPage;

	return items.slice(start, end);
}
