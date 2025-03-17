"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Copy } from "lucide-react";
import type { ComponentProps } from "react";
import { toast } from "sonner";
import { useCopyToClipboard } from "usehooks-ts";
import { Tooltip, TooltipContent, TooltipTrigger } from "./ui/tooltip";

const exampleCommand = "/email add email@example.com";

export function SignUpDialog(props: ComponentProps<typeof DialogTrigger>) {
	const [_, copyFn] = useCopyToClipboard();

	async function handleCopyToClipboard() {
		copyFn(exampleCommand)
			.then(() => {
				toast.success("O comando foi copiado com sucesso!");
			})
			.catch((error) => {
				console.error(error);

				toast.error("Não foi possível copiar o comando.");
			});
	}

	return (
		<Dialog>
			<DialogTrigger {...props} />
			<DialogContent>
				<DialogHeader>
					<DialogTitle>Inscreva-se através do Minecraft</DialogTitle>
					<DialogDescription>
						Para criar sua conta em nosso site, por favor siga os passos abaixo
						dentro do Minecraft.
					</DialogDescription>
				</DialogHeader>
				<Card className="flex justify-between items-center gap-2">
					<code className="ml-2">{exampleCommand}</code>
					<Tooltip>
						<TooltipTrigger asChild>
							<Button
								type="button"
								variant="secondary"
								size="icon"
								onClick={handleCopyToClipboard}
							>
								<Copy />
							</Button>
						</TooltipTrigger>
						<TooltipContent>
							Copiar o comando para a area de transferência
						</TooltipContent>
					</Tooltip>
				</Card>
				<p>
					Após digitar o comando, você receberá um e-mail com as instruções para
					completar o cadastro.
				</p>
				<DialogFooter>
					<Button type="button" variant="secondary" asChild>
						<DialogClose>Voltar</DialogClose>
					</Button>
				</DialogFooter>
			</DialogContent>
		</Dialog>
	);
}
