import React from 'react';

import getCurrentUser from '../actions/getCurrentUser';
import CartPage from '../components/CartPage';

export default async function Page() {
	const currentUser = await getCurrentUser();

	return (
		<div>
			<CartPage currentUser={currentUser} />
		</div>
	);
}
