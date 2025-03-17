import type { ReactNode } from "react";

interface IDefaultLayout {
	children: ReactNode;
}

export default async function DefaultLayout({
	children,
}: Readonly<IDefaultLayout>) {
	return <div className="mx-auto px-4 max-w-7xl min-h-screen">{children}</div>;
}
