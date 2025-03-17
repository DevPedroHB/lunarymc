export interface User {
	id: string;
	name?: string | null;
	email: string;
	emailVerifiedAt?: Date | null;
	image?: string | null;
	createdAt: Date;
	updatedAt?: Date | null;
}
