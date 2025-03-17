"use client";

import { cn } from "@/functions/cn";
import * as SwitchPrimitive from "@radix-ui/react-switch";
import type * as React from "react";

function Switch({
	className,
	...props
}: React.ComponentProps<typeof SwitchPrimitive.Root>) {
	return (
		<SwitchPrimitive.Root
			data-slot="switch"
			className={cn(
				"peer inline-flex items-center data-[state=checked]:bg-primary data-[state=unchecked]:bg-input disabled:opacity-50 shadow-xs border-2 border-transparent rounded-full outline-ring/50 focus-visible:outline-hidden focus-visible:outline-1 dark:outline-ring/40 ring-ring/10 aria-invalid:focus-visible:ring-0 focus-visible:ring-4 dark:ring-ring/20 w-9 h-5 transition-[color,box-shadow] disabled:cursor-not-allowed shrink-0",
				className,
			)}
			{...props}
		>
			<SwitchPrimitive.Thumb
				data-slot="switch-thumb"
				className={cn(
					"block bg-background shadow-lg rounded-full ring-0 size-4 transition-transform data-[state=checked]:translate-x-4 data-[state=unchecked]:translate-x-0 pointer-events-none",
				)}
			/>
		</SwitchPrimitive.Root>
	);
}

export { Switch };
