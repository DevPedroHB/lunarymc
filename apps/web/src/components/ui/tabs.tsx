"use client";

import { cn } from "@/functions/cn";
import * as TabsPrimitive from "@radix-ui/react-tabs";
import type * as React from "react";

function Tabs({
	className,
	...props
}: React.ComponentProps<typeof TabsPrimitive.Root>) {
	return (
		<TabsPrimitive.Root
			data-slot="tabs"
			className={cn("flex flex-col gap-2", className)}
			{...props}
		/>
	);
}

function TabsList({
	className,
	...props
}: React.ComponentProps<typeof TabsPrimitive.List>) {
	return (
		<TabsPrimitive.List
			data-slot="tabs-list"
			className={cn(
				"inline-flex justify-center items-center bg-muted p-[3px] rounded-lg w-fit h-9 text-muted-foreground",
				className,
			)}
			{...props}
		/>
	);
}

function TabsTrigger({
	className,
	...props
}: React.ComponentProps<typeof TabsPrimitive.Trigger>) {
	return (
		<TabsPrimitive.Trigger
			data-slot="tabs-trigger"
			className={cn(
				"inline-flex flex-1 justify-center items-center gap-1.5 data-[state=active]:bg-background dark:data-[state=active]:bg-input/50 disabled:opacity-50 data-[state=active]:shadow-sm px-2 py-1 border dark:data-[state=active]:border-input border-transparent focus-visible:border-ring rounded-md focus-visible:outline-ring focus-visible:outline-1 focus-visible:ring-ring/50 focus-visible:ring-[3px] h-[calc(100%-1px)] [&_svg:not([class*='size-'])]:size-4 font-medium data-[state=active]:text-foreground text-sm whitespace-nowrap transition-[color,box-shadow] disabled:pointer-events-none [&_svg]:pointer-events-none [&_svg]:shrink-0",
				className,
			)}
			{...props}
		/>
	);
}

function TabsContent({
	className,
	...props
}: React.ComponentProps<typeof TabsPrimitive.Content>) {
	return (
		<TabsPrimitive.Content
			data-slot="tabs-content"
			className={cn("flex-1 outline-none", className)}
			{...props}
		/>
	);
}

export { Tabs, TabsContent, TabsList, TabsTrigger };
