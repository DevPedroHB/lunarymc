export interface Session {
	id: string;
	sessionToken: string;
	expiresAt: Date;
	createdAt: Date;
	updatedAt?: Date | null;
	userId: string;
}
