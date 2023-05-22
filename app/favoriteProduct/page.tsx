import React from 'react';
import Products from '../components/Products';
import getProducts from '../actions/getProducts';
import getCurrentUser from '@/app/actions/getCurrentUser';
import getUsers from '../actions/getUsers';

export default async function Page() {
	const currentUser: any = await getCurrentUser();
	const users: any = await getUsers();
	const productData: any = await getProducts();

	const favoriteProducts = productData.filter(
		(product: any) =>
			currentUser && currentUser.favoriteIds.includes(product.id)
	);

	return (
		<>
			<main className='bg-lightBlue'>
				<div className='max-w-contentContainer mx-auto bg-white'>
					<h1 className='text-blue text-4xl font-bold text-center py-5'>
						All favorite products
					</h1>
					<Products productData={favoriteProducts} />
				</div>
			</main>
		</>
	);
}
