import type {
	Adapter,
	AdapterAccount,
	AdapterAuthenticator,
	AdapterSession,
	AdapterUser,
	VerificationToken as AdapterVerificationToken,
} from "@auth/core/adapters";

export const ApiAdapter: Adapter = {
	async createAuthenticator(authenticator) {
		console.log("createAuthenticator", authenticator);

		return {} as AdapterAuthenticator;
	},
	async createSession(session) {
		console.log("createSession", session);

		return {} as AdapterSession;
	},
	async createUser(user) {
		console.log("createUser", user);

		return {} as AdapterUser;
	},
	async createVerificationToken(verificationToken) {
		console.log("createVerificationToken", verificationToken);

		return {} as AdapterVerificationToken;
	},
	async deleteSession(sessionToken) {
		console.log("deleteSession", sessionToken);

		return {} as AdapterSession;
	},
	async deleteUser(userId) {
		console.log("deleteUser", userId);

		return {} as AdapterUser;
	},
	async getAccount(providerAccountId, provider) {
		console.log("getAccount", providerAccountId, provider);

		return {} as AdapterAccount;
	},
	async getAuthenticator(credentialID) {
		console.log("getAuthenticator", credentialID);

		return {} as AdapterAuthenticator;
	},
	async getSessionAndUser(sessionToken) {
		console.log("getSessionAndUser", sessionToken);

		return {} as {
			session: AdapterSession;
			user: AdapterUser;
		};
	},
	async getUser(id) {
		console.log("getUser", id);

		return {} as AdapterUser;
	},
	async getUserByAccount(providerAccountId) {
		console.log("getUserByAccount", providerAccountId);

		return {} as AdapterUser;
	},
	async getUserByEmail(email) {
		console.log("getUserByEmail", email);

		return {} as AdapterUser;
	},
	async linkAccount(account) {
		console.log("linkAccount", account);

		return {} as AdapterAccount;
	},
	async listAuthenticatorsByUserId(userId) {
		console.log("listAuthenticatorsByUserId", userId);

		return [] as AdapterAuthenticator[];
	},
	async unlinkAccount(providerAccountId) {
		console.log("unlinkAccount", providerAccountId);

		return {} as AdapterAccount;
	},
	async updateAuthenticatorCounter(credentialID, newCounter) {
		console.log("updateAuthenticatorCounter", credentialID, newCounter);

		return {} as AdapterAuthenticator;
	},
	async updateSession(session) {
		console.log("updateSession", session);

		return {} as AdapterSession;
	},
	async updateUser(user) {
		console.log("updateUser", user);

		return {} as AdapterUser;
	},
	async useVerificationToken(params) {
		console.log("useVerificationToken", params);

		return {} as AdapterVerificationToken;
	},
};
