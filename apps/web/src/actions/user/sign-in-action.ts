"use server";

import type { AdapterUser } from "@auth/core/adapters";
import type { User } from "@lunarymc/types";
import ky from "ky";

export async function signInAction({
	id,
	email,
	emailVerified,
	image,
	name,
}: AdapterUser) {
	const user = await ky
		.post("users", {
			json: {
				id,
				name,
				email,
				emailVerifiedAt: emailVerified,
				image,
				createdAt: new Date(),
			} as User,
		})
		.json<User>();

	return {
		user,
	};
}
