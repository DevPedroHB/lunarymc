export interface User {
	id: string;
	name?: string | null;
	email: string;
	emailVerifiedAt?: Date | null;
	avatarUrl?: string | null;
	createdAt: Date;
	updatedAt?: Date | null;
}
