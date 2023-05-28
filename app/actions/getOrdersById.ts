import prisma from '@/app/libs/prismadb';

type IGetOrdersById = string[];

export default async function getOrdersById({}: IGetOrdersById) {
	try {
		const products = await prisma.orders.findMany({
			where: {
				productUserIds: {},
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
