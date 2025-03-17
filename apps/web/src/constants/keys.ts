import { formatKeyStorage } from "@/functions/format-key-storage";

export const keys = {
	THEME_KEY: formatKeyStorage("theme"),
	COOKIE_AUTHORIZATION: formatKeyStorage("cookie-authorization"),
} as const;
