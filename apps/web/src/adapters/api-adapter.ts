import { signInAction } from "@/actions/user/sign-in-action";
import type { Adapter } from "@auth/core/adapters";

export const ApiAdapter: Adapter = {
	async createUser(data) {
		const { user } = await signInAction(data);

		return {
			id: user.id,
			name: user.name,
			email: user.email,
			emailVerified: user.emailVerifiedAt || null,
			image: user.image,
		};
	},
	async createAuthenticator(authenticator) {
		console.log("createAuthenticator", authenticator);

		return authenticator;
	},
	async createSession(session) {
		console.log("createSession", session);

		return session;
	},
	async createVerificationToken(verificationToken) {
		console.log("createVerificationToken", verificationToken);

		return null;
	},
	async deleteSession(sessionToken) {
		console.log("deleteSession", sessionToken);
	},
	async deleteUser(userId) {
		console.log("deleteUser", userId);
	},
	async getAccount(providerAccountId, provider) {
		console.log("getAccount", providerAccountId, provider);

		return null;
	},
	async getAuthenticator(credentialID) {
		console.log("getAuthenticator", credentialID);

		return null;
	},
	async getSessionAndUser(sessionToken) {
		console.log("getSessionAndUser", sessionToken);

		return null;
	},
	async getUser(id) {
		console.log("getUser", id);

		return null;
	},
	async getUserByAccount(providerAccountId) {
		console.log("getUserByAccount", providerAccountId);

		return null;
	},
	async getUserByEmail(email) {
		console.log("getUserByEmail", email);

		return null;
	},
	async linkAccount(account) {
		console.log("linkAccount", account);
	},
	async listAuthenticatorsByUserId(userId) {
		console.log("listAuthenticatorsByUserId", userId);

		return [];
	},
	async unlinkAccount(providerAccountId) {
		console.log("unlinkAccount", providerAccountId);
	},
	async updateAuthenticatorCounter(credentialID, newCounter) {
		console.log("updateAuthenticatorCounter", credentialID, newCounter);

		return {
			counter: 1,
			credentialBackedUp: false,
			credentialDeviceType: "credentialDeviceType",
			credentialID: "credentialID",
			credentialPublicKey: "credentialPublicKey",
			providerAccountId: "providerAccountId",
			userId: "userId",
		};
	},
	async updateSession(session) {
		console.log("updateSession", session);

		return null;
	},
	async updateUser(user) {
		console.log("updateUser", user);

		return {
			email: "email",
			emailVerified: new Date(),
			id: "id",
			image: "image",
			name: "name",
		};
	},
	async useVerificationToken(params) {
		console.log("useVerificationToken", params);

		return null;
	},
};
