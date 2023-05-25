import prisma from '@/app/libs/prismadb';

export default async function getOrders() {
	try {
		const orders = await prisma.orders.findMany({
			orderBy: {
				createdAt: 'desc',
			},
		});

		const safeOrders = orders.map((order) => {
			return {
				...order,
				createdAt: order.createdAt.toISOString(),
			};
		});

		return safeOrders;
	} catch (error: any) {
		throw new Error(error);
	}
}
