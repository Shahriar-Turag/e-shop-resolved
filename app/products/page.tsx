import React from 'react';
import Products from '../components/Products';
import getProducts from '../actions/getProducts';

export default async function Page() {
	const productData: any = await getProducts();

	return (
		<>
			<main className='bg-lightBlue'>
				<div className='max-w-contentContainer mx-auto bg-white'>
					<h1 className='text-blue text-4xl font-bold text-center py-5'>
						All products
					</h1>
					<Products productData={productData} />
				</div>
			</main>
		</>
	);
}
