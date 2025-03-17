import type { User } from "@lunarymc/types";
import "next-auth";

declare module "next-auth" {
	interface Session {
		user: User;
	}
}
