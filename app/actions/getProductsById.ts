import prisma from '@/app/libs/prismadb';

interface IGetProductsById {
	userId?: string;
}

export default async function getProductsById({ userId }: IGetProductsById) {
	try {
		const products = await prisma.products.findMany({
			where: {
				userId: userId,
			},
			orderBy: {
				createdAt: 'desc',
			},
		});

		if (!products || products.length === 0)
			throw new Error('No products found');

		return products;
	} catch (error: any) {
		throw new Error(error);
	}
}
