"use client";

import { cn } from "@/functions/cn";
import * as CheckboxPrimitive from "@radix-ui/react-checkbox";
import { CheckIcon } from "lucide-react";
import type * as React from "react";

function Checkbox({
	className,
	...props
}: React.ComponentProps<typeof CheckboxPrimitive.Root>) {
	return (
		<CheckboxPrimitive.Root
			data-slot="checkbox"
			className={cn(
				"peer data-[state=checked]:bg-primary disabled:opacity-50 shadow-xs border border-input data-[state=checked]:border-primary rounded-[4px] outline-ring/50 focus-visible:outline-1 dark:outline-ring/40 ring-ring/10 aria-invalid:focus-visible:ring-0 focus-visible:ring-4 dark:ring-ring/20 size-4 data-[state=checked]:text-primary-foreground transition-[color,box-shadow] disabled:cursor-not-allowed shrink-0",
				className,
			)}
			{...props}
		>
			<CheckboxPrimitive.Indicator
				data-slot="checkbox-indicator"
				className="flex justify-center items-center text-current"
			>
				<CheckIcon className="size-3.5" />
			</CheckboxPrimitive.Indicator>
		</CheckboxPrimitive.Root>
	);
}

export { Checkbox };
