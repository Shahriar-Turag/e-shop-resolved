import { NextResponse } from 'next/server';

import prisma from '@/app/libs/prismadb';
import getCurrentUser from '@/app/actions/getCurrentUser';

export async function POST(request: Request) {
	const currentUser = await getCurrentUser();

	if (!currentUser) {
		return NextResponse.error();
	}

	const body = await request.json();
	const { title, description, brand, price, oldPrice, image, category } =
		body;

	Object.keys(body).forEach((value: any) => {
		if (!body[value]) {
			NextResponse.error();
		}
	});

	const products = await prisma.products.create({
		data: {
			title,
			description,
			brand,
			price: parseInt(price, 10),
			oldPrice: parseInt(oldPrice, 10),
			image,
			category,
			userId: currentUser.id,
		},
	});

	return NextResponse.json(products);
}
