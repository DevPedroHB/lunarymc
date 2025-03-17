"use client";

import { SignUpDialog } from "@/components/sign-up-dialog";
import { authProviders } from "@/constants/auth-providers";
import { zodResolver } from "@hookform/resolvers/zod";
import { type SignInSchema, signInSchema } from "@lunarymc/types";
import type { BuiltInProviderType } from "next-auth/providers";
import { type LiteralUnion, signIn } from "next-auth/react";
import Link from "next/link";
import type { ComponentProps } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { ForgotPasswordDialog } from "./forgot-password-dialog";
import { Button } from "./ui/button";
import { Dialog, DialogContent, DialogTrigger } from "./ui/dialog";
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "./ui/form";
import { Input } from "./ui/input";

interface ISignInDialog extends ComponentProps<typeof DialogTrigger> {}

export function SignInDialog(props: ISignInDialog) {
	const form = useForm<SignInSchema>({
		resolver: zodResolver(signInSchema),
	});

	async function handleSignInCredentials(data: SignInSchema) {
		console.log(data);

		form.reset({
			email: "",
			password: "",
		});

		toast.success("Seja bem-vindo ao LunaryMC.");
	}

	async function handleSignInProvider(
		provider: LiteralUnion<BuiltInProviderType>,
	) {
		await signIn(provider);

		toast.success("Seja bem-vindo ao LunaryMC.");
	}

	return (
		<Dialog>
			<DialogTrigger {...props} />
			<DialogContent className="grid md:grid-cols-2 p-0 md:max-w-3xl">
				<div className="flex flex-col gap-6 p-6 md:p-8">
					<div className="flex flex-col items-center text-center">
						<h1 className="font-bold text-2xl">Bem-vindo de volta</h1>
						<p className="text-balance">Faça o login na sua conta LunaryMC</p>
					</div>
					<Form {...form}>
						<form
							onSubmit={form.handleSubmit(handleSignInCredentials)}
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
							<FormField
								control={form.control}
								name="password"
								render={({ field }) => (
									<FormItem>
										<FormLabel className="flex justify-between">
											Senha
											<ForgotPasswordDialog asChild>
												<button
													type="button"
													className="hover:underline underline-offset-2 cursor-pointer"
												>
													Esqueceu sua senha?
												</button>
											</ForgotPasswordDialog>
										</FormLabel>
										<FormControl>
											<Input
												type="password"
												placeholder="******"
												minLength={6}
												maxLength={32}
												required
												{...field}
											/>
										</FormControl>
										<FormMessage />
									</FormItem>
								)}
							/>
							<Button type="submit">Entrar</Button>
						</form>
					</Form>
					<div className="after:top-1/2 after:z-0 after:absolute relative after:inset-0 after:flex after:items-center after:border-t after:border-border text-sm text-center">
						<span className="z-10 relative bg-background px-2 text-muted-foreground">
							Ou continue com
						</span>
					</div>
					<div className="gap-4 grid grid-cols-3">
						{authProviders.map((authProvider) => {
							const Icon = authProvider.icon;

							return (
								<Button
									key={authProvider.provider}
									type="button"
									variant="outline"
									onClick={() => handleSignInProvider(authProvider.provider)}
								>
									{authProvider.provider === "github" ? (
										<Icon className="invert dark:invert-0 size-5" />
									) : (
										<Icon className="size-5" />
									)}
								</Button>
							);
						})}
					</div>
					<h5 className="text-sm text-center">
						Não tem uma conta?{" "}
						<SignUpDialog asChild>
							<button
								type="button"
								className="hover:text-primary underline underline-offset-4 transition-all cursor-pointer"
							>
								Inscrever-se
							</button>
						</SignUpDialog>
					</h5>
					<h6 className="md:hidden text-muted-foreground text-xs text-center text-balance">
						Ao continuar você concorda com nossos{" "}
						<Link
							href="/terms-of-service"
							className="hover:text-primary underline underline-offset-4"
						>
							Termos de Serviço
						</Link>{" "}
						e{" "}
						<Link
							href="/privacy-policy"
							className="hover:text-primary underline underline-offset-4"
						>
							Política de Privacidade
						</Link>
						.
					</h6>
				</div>
				<div className="hidden md:block bg-[url(/images/bg-sign-in.png)] bg-cover bg-no-repeat bg-center">
					<div className="flex items-end backdrop-blur-xs backdrop-brightness-75 h-full">
						<h6 className="mb-6 text-muted-foreground text-xs text-center text-balance">
							Ao continuar você concorda com nossos{" "}
							<Link
								href="/terms-of-service"
								className="hover:text-primary underline underline-offset-4"
							>
								Termos de Serviço
							</Link>{" "}
							e{" "}
							<Link
								href="/privacy-policy"
								className="hover:text-primary underline underline-offset-4"
							>
								Política de Privacidade
							</Link>
							.
						</h6>
					</div>
				</div>
			</DialogContent>
		</Dialog>
	);
}
