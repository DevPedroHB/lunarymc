"use client";

import { cn } from "@/functions/cn";
import * as TogglePrimitive from "@radix-ui/react-toggle";
import { type VariantProps, cva } from "class-variance-authority";
import type * as React from "react";

const toggleVariants = cva(
	"inline-flex justify-center items-center gap-2 data-[state=on]:bg-accent hover:bg-muted disabled:opacity-50 rounded-md outline-ring/50 focus-visible:outline-1 dark:outline-ring/40 ring-ring/10 aria-invalid:focus-visible:ring-0 focus-visible:ring-4 dark:ring-ring/20 [&_svg:not([class*='size-'])]:size-4 font-medium hover:text-muted-foreground text-sm transition-[color,box-shadow] transition-colors data-[state=on]:text-accent-foreground disabled:pointer-events-none [&_svg]:pointer-events-none [&_svg]:shrink-0",
	{
		variants: {
			variant: {
				default: "bg-transparent",
				outline:
					"border border-input bg-transparent shadow-xs hover:bg-accent hover:text-accent-foreground",
			},
			size: {
				default: "h-9 px-2 min-w-9",
				sm: "h-8 px-1.5 min-w-8",
				lg: "h-10 px-2.5 min-w-10",
			},
		},
		defaultVariants: {
			variant: "default",
			size: "default",
		},
	},
);

function Toggle({
	className,
	variant,
	size,
	...props
}: React.ComponentProps<typeof TogglePrimitive.Root> &
	VariantProps<typeof toggleVariants>) {
	return (
		<TogglePrimitive.Root
			data-slot="toggle"
			className={cn(toggleVariants({ variant, size, className }))}
			{...props}
		/>
	);
}

export { Toggle, toggleVariants };
