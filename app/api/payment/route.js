import { NextResponse } from 'next/server';
import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
	apiVersion: '2022-11-15',
});

export async function POST(request) {
	const body = await request.json();
	const { items, email } = body;

	const modifiedItems = items.map((item) => ({
		quantity: item.quantity,
		price_data: {
			currency: 'usd',
			unit_amount: item.price * 100,
			product_data: {
				name: item.title,
				description: item.description,
				images: [item.image],
			},
		},
	}));

	const session = await stripe.checkout.sessions.create({
		payment_method_types: ['card'],
		// shipping_options: [
		// 	{
		// 		id: 'basic',
		// 		label: 'Ground shipping',
		// 		detail: 'Ground shipping via UPS or FedEx',
		// 		amount: 995,
		// 	},
		// ],
		shipping_address_collection: {
			allowed_countries: ['US', 'BD'],
		},
		line_items: modifiedItems,
		mode: 'payment',
		success_url: `${process.env.HOST}/success`,
		cancel_url: `${process.env.HOST}/checkout`,
		metadata: {
			email,
			images: JSON.stringify(items.map((item) => item.image)),
		},
	});

	return NextResponse.json({ id: session.id });
}
