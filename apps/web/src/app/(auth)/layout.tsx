import { auth } from "@/auth";
import { redirect } from "next/navigation";
import type { ReactNode } from "react";

interface IAuthLayout {
	children: ReactNode;
}

export default async function AuthLayout({ children }: Readonly<IAuthLayout>) {
	const session = await auth();

	if (session) {
		return redirect("/");
	}

	return (
		<div className="flex justify-center items-center min-h-screen">
			{children}
		</div>
	);
}
