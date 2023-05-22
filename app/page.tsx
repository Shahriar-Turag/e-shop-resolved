import Banner from '@/app/components/Banner';
import Products from '@/app/components/Products';
import getProducts from './actions/getProducts';
import getCurrentUser from './actions/getCurrentUser';
import AdminPage from './components/AdminPage';
import getUsers from './actions/getUsers';
import SellerPage from './components/SellerPage';
import { SafeProduct } from './types';
import deleteProductById from './actions/deleteProductById';
import ClientOnly from './components/ClientOnly';
import Container from './components/Container';
import CartPage from './components/CartPage';

export default async function Home() {
	const productData: any = await getProducts();
	const usersData: any = await getUsers();

	const currentUser = await getCurrentUser();
	const userProductData = productData.filter(
		(product: any) => product.userId === currentUser?.id
	);

	const deleteProducts: any = async (productIds: string[]) => {
		for (const productId of productIds) {
			await deleteProductById(productId);
		}
	};

	return (
		<>
			<main className='bg-lightBlue'>
				<div className='max-w-contentContainer mx-auto bg-white'>
					<Banner />

					{currentUser?.role === 'admin' ? (
						<AdminPage
							currentUser={currentUser}
							usersData={usersData}
						/>
					) : currentUser?.role === 'seller' ? (
						<SellerPage
							usersData={usersData}
							productData={userProductData}
							currentUser={currentUser}
						/>
					) : (
						<Products
							productData={productData}
							currentUser={currentUser}
						/>
					)}
				</div>
			</main>
		</>
	);
}
