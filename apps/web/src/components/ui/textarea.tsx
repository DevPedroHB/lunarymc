import { cn } from "@/functions/cn";
import type * as React from "react";

function Textarea({ className, ...props }: React.ComponentProps<"textarea">) {
	return (
		<textarea
			data-slot="textarea"
			className={cn(
				"flex bg-transparent disabled:opacity-50 shadow-xs px-3 py-2 border border-input aria-invalid:border-destructive/60 dark:aria-invalid:border-destructive rounded-md outline-ring/50 aria-invalid:outline-destructive/60 dark:aria-invalid:outline-destructive aria-invalid:focus-visible:outline-none focus-visible:outline-1 dark:outline-ring/40 ring-ring/10 dark:aria-invalid:ring-destructive/40 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/50 aria-invalid:focus-visible:ring-[3px] dark:aria-invalid:focus-visible:ring-4 focus-visible:ring-4 dark:ring-ring/20 w-full min-h-16 placeholder:text-muted-foreground md:text-sm text-base transition-[color,box-shadow] field-sizing-content disabled:cursor-not-allowed",
				className,
			)}
			{...props}
		/>
	);
}

export { Textarea };
