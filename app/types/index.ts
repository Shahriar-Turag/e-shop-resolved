import { User, Products } from '@prisma/client';

export type SafeProduct = Omit<Products, 'createdAt'> & {
	createdAt: string;
};

export type SafeUser = Omit<
	User,
	'createdAt' | 'updatedAt' | 'emailVerified' | 'role' | '_id' | 'image'
> & {
	createdAt: string;
	updatedAt: string;
	emailVerified: string | null;
	role: string;
	id: string;
	image: string | null;
};
