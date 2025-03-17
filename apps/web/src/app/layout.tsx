import { CookieAuthorizationSheet } from "@/components/cookie-authorization-sheet";
import { TooltipProvider } from "@/components/ui/tooltip";
import { ReactQueryProvider } from "@/providers/react-query-provider";
import { ThemeProvider } from "@/providers/theme-provider";
import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import type { ReactNode } from "react";
import { Toaster } from "sonner";
import "./globals.css";

const montserrat = Montserrat({
	display: "swap",
	subsets: ["latin"],
	variable: "--font-montserrat",
});

export const metadata: Metadata = {
	title: {
		template: "%s | LunaryMC",
		default: "LunaryMC",
	},
	description: "Site oficial da rede de servidores de Minecraft LunaryMC.",
	keywords: ["LunaryMC"],
	authors: [
		{ name: "Pedro Henrique Bérgamo", url: "https://github.com/DevPedroHB" },
	],
};

interface IRootLayout {
	children: ReactNode;
}

export default function RootLayout({ children }: Readonly<IRootLayout>) {
	return (
		<html
			lang="pt-BR"
			className={`${montserrat.variable} antialiased scroll-smooth font-sans`}
			suppressHydrationWarning
		>
			<body className="bg-background text-foreground">
				<ReactQueryProvider>
					<ThemeProvider>
						<TooltipProvider>
							{children}
							<Toaster
								visibleToasts={9}
								richColors
								closeButton
								pauseWhenPageIsHidden
							/>
							<CookieAuthorizationSheet />
						</TooltipProvider>
					</ThemeProvider>
				</ReactQueryProvider>
			</body>
		</html>
	);
}
