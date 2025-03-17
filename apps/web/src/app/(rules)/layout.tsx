import type { ReactNode } from "react";

interface IRulesLayout {
	children: ReactNode;
}

export default async function RulesLayout({
	children,
}: Readonly<IRulesLayout>) {
	return <div className="mx-auto px-4 max-w-7xl min-h-screen">{children}</div>;
}
