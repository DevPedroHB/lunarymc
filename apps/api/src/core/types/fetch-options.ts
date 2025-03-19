import { Pagination } from "./pagination";
import { SortOrder } from "./sort-order";

export type FetchOptions<T> = Partial<{
	fields: Partial<T>;
	orderBy: SortOrder<T>;
	pagination: Pagination;
}>;
