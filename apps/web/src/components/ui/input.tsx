import { cn } from "@/functions/cn";
import type * as React from "react";

function Input({ className, type, ...props }: React.ComponentProps<"input">) {
	return (
		<input
			type={type}
			data-slot="input"
			className={cn(
				"file:inline-flex flex bg-transparent selection:bg-primary file:bg-transparent disabled:opacity-50 shadow-xs px-3 py-1 border border-input aria-invalid:border-destructive/60 dark:aria-invalid:border-destructive file:border-0 rounded-md outline-ring/50 aria-invalid:outline-destructive/60 dark:aria-invalid:outline-destructive aria-invalid:outline-destructive/60 dark:aria-invalid:outline-destructive aria-invalid:focus-visible:outline-none focus-visible:outline-1 dark:outline-ring/40 ring-ring/10 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/50 dark:aria-invalid:ring-destructive/40 aria-invalid:ring-destructive/20 aria-invalid:focus-visible:ring-[3px] dark:aria-invalid:focus-visible:ring-4 focus-visible:ring-4 dark:ring-ring/20 w-full min-w-0 h-9 file:h-7 file:font-medium selection:text-primary-foreground placeholder:text-muted-foreground file:text-foreground file:text-sm md:text-sm text-base transition-[color,box-shadow] disabled:cursor-not-allowed disabled:pointer-events-none",
				className,
			)}
			{...props}
		/>
	);
}

export { Input };
