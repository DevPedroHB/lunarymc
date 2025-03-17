import { env } from "@lunarymc/env";
import NextAuth from "next-auth";
import GitHub from "next-auth/providers/github";

export const { handlers, signIn, signOut, auth } = NextAuth({
	providers: [
		GitHub({
			clientId: env.AUTH_GITHUB_ID,
			clientSecret: env.AUTH_GITHUB_SECRET,
		}),
	],
	callbacks: {
		async session({ session, user }) {
			session.user = {
				...session.user,
				...user,
			};

			return session;
		},
	},
});
