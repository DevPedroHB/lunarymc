import { cn } from "@/functions/cn";

function Skeleton({ className, ...props }: React.ComponentProps<"div">) {
	return (
		<div
			data-slot="skeleton"
			className={cn("bg-primary/10 rounded-md animate-pulse", className)}
			{...props}
		/>
	);
}

export { Skeleton };
