const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

const handler = async (req: any, res: any) => {
	const { items, email } = req.body;

	const modifyItems = items.map((item: any) => ({
		description: item.description,
		quantity: 1,
	}));

	const session = await stripe.checkout.sessions.create({
		payment_method_types: ['card'],
		shipping_rates: ['shr_1NAUPbHlBSjc8AQLLnsCZcUI'],
		shipping_address_collection: {
			allowed_countries: ['US', 'BD'],
		},
		line_items: modifyItems,
		mode: 'payment',
		success_url: `${process.env.HOST}/success}`,
		cancel_url: `${process.env.HOST}/checkout}`,
		metadata: {
			email,
			images: JSON.stringify(items.map((item: any) => item.image)),
		},
	});

	// Handle the response and send it back
	res.status(200).json({ id: session });
};

export default handler;
