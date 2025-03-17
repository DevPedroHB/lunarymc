"use client";

import {
	QueryClient,
	QueryClientProvider,
	type QueryClientProviderProps,
} from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { useState } from "react";

interface IReactQueryProvider extends Partial<QueryClientProviderProps> {}

export function ReactQueryProvider({ children, ...rest }: IReactQueryProvider) {
	const [queryClient] = useState(() => new QueryClient());

	return (
		<QueryClientProvider client={queryClient} {...rest}>
			{children}
			<ReactQueryDevtools initialIsOpen={false} />
		</QueryClientProvider>
	);
}
