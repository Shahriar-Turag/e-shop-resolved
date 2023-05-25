import React from 'react';

import getCurrentUser from '../actions/getCurrentUser';
import CartPage from '../components/CartPage';

export default async function Page() {
	const currentUser = await getCurrentUser();

	return (
		<div className='max-w-contentContainer mx-auto'>
			<CartPage currentUser={currentUser} />
		</div>
	);
}
