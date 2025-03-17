import { Github } from "@/components/svgs/github";
import { Google } from "@/components/svgs/google";
import { Microsoft } from "@/components/svgs/microsoft";

export const authProviders = [
	{
		provider: "google",
		icon: Google,
	},
	{
		provider: "github",
		icon: Github,
	},
	{
		provider: "microsoft-entra-id",
		icon: Microsoft,
	},
] as const;
