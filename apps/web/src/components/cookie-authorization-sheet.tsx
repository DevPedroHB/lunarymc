"use client";

import { keys } from "@/constants/keys";
import { getCookie, setCookie } from "cookies-next/client";
import { Cookie } from "lucide-react";
import Link from "next/link";
import { useEffect } from "react";
import { useBoolean } from "usehooks-ts";
import { Button } from "./ui/button";
import {
	Sheet,
	SheetClose,
	SheetContent,
	SheetDescription,
	SheetFooter,
	SheetHeader,
	SheetTitle,
} from "./ui/sheet";

export function CookieAuthorizationSheet() {
	const { value, setValue } = useBoolean(false);

	function handleAuthorizeCookies() {
		setCookie(keys.COOKIE_AUTHORIZATION, true, {
			maxAge: 60 * 60 * 24 * 365, // 1 year
		});

		setValue(false);
	}

	useEffect(() => {
		const cookie = getCookie(keys.COOKIE_AUTHORIZATION);

		if (!cookie) {
			setValue(true);
		}
	}, [setValue]);

	return (
		<Sheet open={value} onOpenChange={setValue}>
			<SheetContent side="bottom">
				<SheetHeader className="pb-0">
					<SheetTitle className="flex items-center gap-2">
						<Cookie className="size-5 text-primary" />
						Cookies no LunaryMC
					</SheetTitle>
					<SheetDescription>
						Utilizamos cookies para melhorar sua experiência de navegação,
						personalizar conteúdo e anúncios, fornecer recursos de mídia social
						e analisar o tráfego do nosso site. Ao clicar em "Aceitar todos",
						você concorda com o uso de cookies conforme descrito em nossa{" "}
						<Link
							href="/privacy-policy"
							className="text-primary hover:underline"
						>
							Política de Privacidade
						</Link>
						.
					</SheetDescription>
				</SheetHeader>
				<SheetFooter className="flex-row justify-end pt-0">
					<SheetClose asChild>
						<Button type="button" variant="secondary">
							Cancelar
						</Button>
					</SheetClose>
					<Button type="button" onClick={handleAuthorizeCookies}>
						Aceitar todos
					</Button>
				</SheetFooter>
			</SheetContent>
		</Sheet>
	);
}
