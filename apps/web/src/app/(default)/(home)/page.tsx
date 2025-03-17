import { auth } from "@/auth";
import { SignInDialog } from "@/components/sign-in-dialog";
import { SignOutAlertDialog } from "@/components/sign-out-alert-dialog";
import { ToggleTheme } from "@/components/toggle-theme";
import { Button } from "@/components/ui/button";
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "Início",
};

export default async function Home() {
	const session = await auth();

	return (
		<main className="flex flex-col gap-4 py-6">
			<Card>
				<CardHeader>
					<CardTitle>Session</CardTitle>
					<CardDescription>Pega a sessão do usuário.</CardDescription>
				</CardHeader>
				<CardContent>
					<pre>
						<code>{JSON.stringify(session, null, 2)}</code>
					</pre>
				</CardContent>
				<CardFooter className="gap-4">
					{!session && (
						<SignInDialog asChild>
							<Button type="button">Entrar</Button>
						</SignInDialog>
					)}
					{session && (
						<SignOutAlertDialog asChild>
							<Button type="button">Sair</Button>
						</SignOutAlertDialog>
					)}
				</CardFooter>
			</Card>
			<ToggleTheme />
		</main>
	);
}
