"use client";

import { signOut } from "next-auth/react";
import type { ComponentProps } from "react";
import { toast } from "sonner";
import {
	AlertDialog,
	AlertDialogAction,
	AlertDialogCancel,
	AlertDialogContent,
	AlertDialogDescription,
	AlertDialogFooter,
	AlertDialogHeader,
	AlertDialogTitle,
	AlertDialogTrigger,
} from "./ui/alert-dialog";

interface ISignOutAlertDialog
	extends ComponentProps<typeof AlertDialogTrigger> {}

export function SignOutAlertDialog(props: ISignOutAlertDialog) {
	async function handleSignOut() {
		await signOut();

		toast.success("Sua sessão foi encerrada com sucesso!");
	}

	return (
		<AlertDialog>
			<AlertDialogTrigger {...props} />
			<AlertDialogContent>
				<AlertDialogHeader>
					<AlertDialogTitle>Tem certeza de que deseja sair?</AlertDialogTitle>
					<AlertDialogDescription>
						Ao encerrar a sessão, você será desconectado da sua conta neste
						dispositivo. Sua conta continuará ativa, e todas as suas informações
						permanecerão seguras. Você poderá acessar novamente a qualquer
						momento utilizando suas credenciais habituais.
					</AlertDialogDescription>
				</AlertDialogHeader>
				<AlertDialogFooter>
					<AlertDialogCancel>Cancelar</AlertDialogCancel>
					<AlertDialogAction variant="destructive" onClick={handleSignOut}>
						Sair
					</AlertDialogAction>
				</AlertDialogFooter>
			</AlertDialogContent>
		</AlertDialog>
	);
}
