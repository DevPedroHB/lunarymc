"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import {
	type ForgotPasswordSchema,
	forgotPasswordSchema,
} from "@lunarymc/types";
import type { ComponentProps } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { useBoolean } from "usehooks-ts";
import { Button } from "./ui/button";
import { Dialog, DialogClose, DialogContent, DialogTrigger } from "./ui/dialog";
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "./ui/form";
import { Input } from "./ui/input";

interface IForgotPasswordDialog extends ComponentProps<typeof DialogTrigger> {}

export function ForgotPasswordDialog(props: IForgotPasswordDialog) {
	const { value, setValue, toggle } = useBoolean();

	const form = useForm<ForgotPasswordSchema>({
		resolver: zodResolver(forgotPasswordSchema),
	});

	async function handleForgotPassword(data: ForgotPasswordSchema) {
		console.log(data);

		toast.success(
			"Um link de redefinição de senha foi enviado para o seu email.",
		);

		form.reset({
			email: "",
		});

		toggle();
	}

	return (
		<Dialog open={value} onOpenChange={setValue}>
			<DialogTrigger {...props} />
			<DialogContent className="grid md:grid-cols-2 p-0 md:max-w-3xl">
				<div className="hidden md:block bg-[url(/images/bg-sign-in.png)] bg-cover bg-no-repeat bg-center">
					<div className="flex items-end backdrop-blur-xs backdrop-brightness-75 h-full" />
				</div>
				<div className="flex flex-col gap-6 p-6 md:p-8">
					<div className="flex flex-col items-center text-center">
						<h1 className="font-bold text-2xl">Recuperar Senha</h1>
						<p className="text-balance">Recupere a sua conta LunaryMC</p>
					</div>
					<Form {...form}>
						<form
							onSubmit={form.handleSubmit(handleForgotPassword)}
							className="flex flex-col gap-4"
						>
							<FormField
								control={form.control}
								name="email"
								render={({ field }) => (
									<FormItem>
										<FormLabel>Email</FormLabel>
										<FormControl>
											<Input
												type="email"
												placeholder="email@example.com"
												required
												{...field}
											/>
										</FormControl>
										<FormMessage />
									</FormItem>
								)}
							/>
							<Button type="submit">Enviar</Button>
						</form>
					</Form>
					<h5 className="text-sm text-center">
						Lembrou sua senha?{" "}
						<DialogClose asChild>
							<button
								type="button"
								className="hover:text-primary underline underline-offset-4 transition-all cursor-pointer"
							>
								Entrar
							</button>
						</DialogClose>
					</h5>
					<h6 className="text-muted-foreground text-xs text-center text-balance">
						Será enviado um email com um link para redefinir sua senha. Se não
						encontrar, verifique sua caixa de spam.
					</h6>
				</div>
			</DialogContent>
		</Dialog>
	);
}
