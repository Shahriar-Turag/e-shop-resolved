import prisma from '@/app/libs/prismadb';

export default async function getProducts() {
	try {
		const products = await prisma.products.findMany({
			orderBy: {
				createdAt: 'desc',
			},
		});

		const safeProducts = products.map((product) => {
			return {
				...product,
				createdAt: product.createdAt.toISOString(),
			};
		});

		return safeProducts;
	} catch (error: any) {
		throw new Error(error);
	}
}
