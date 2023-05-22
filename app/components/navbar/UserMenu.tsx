'use client';
import { AiOutlineMenu } from 'react-icons/ai';
// import Avatar from '../Avatar';
import { useCallback, useState } from 'react';
import MenuItem from './MenuItem';
import useRegisterModal from '@/app/hooks/useRegisterModal';
import useLoginModal from '@/app/hooks/useLoginModal';
import { signOut } from 'next-auth/react';
import { SafeUser } from '@/app/types';
import Avatar from './Avatar';
import { useRouter } from 'next/navigation';
import useSellerRegisterModal from '@/app/hooks/useSellerRegModal';
import useAddProductModal from '@/app/hooks/useAddProductModal';

interface UserMenuProps {
	currentUser?: SafeUser | null;
}

const UserMenu: React.FC<UserMenuProps> = ({ currentUser }) => {
	// console.log(currentUser?.id);
	const router = useRouter();
	const registerModal = useRegisterModal();
	const loginModal = useLoginModal();
	const SellerModal = useSellerRegisterModal();
	const addProductModal = useAddProductModal();
	const [isOpen, setIsOpen] = useState(false);

	const toggleOpen = useCallback(() => {
		setIsOpen((value) => !value);
	}, []);

	const onAddProduct = useCallback(() => {
		if (!currentUser) {
			loginModal.onOpen();
		}

		addProductModal.onOpen();
	}, [currentUser, loginModal, addProductModal]);

	return (
		<div className='relative'>
			<div className='flex flex-row items-center gap-3'>
				<div
					onClick={toggleOpen}
					className='p-4 md:py-1 md:px-2 border-[1px] border-neutral-200 flex flex-row items-center gap-3 rounded-full cursor-pointer hover:shadow-md transition'
				>
					<AiOutlineMenu />
					<div className='hidden md:block'>
						<Avatar src={currentUser?.image} />
					</div>
				</div>
			</div>
			{isOpen && (
				<div className='absolute rounded-xl shadow-md w-[150px] bg-white overflow-hidden right-0 top-12 text-sm text-black        '>
					<div className='flex flex-col cursor-pointer'>
						{currentUser?.role === 'admin' ? (
							<>
								<MenuItem
									onClick={() => {
										router.push('/products');
									}}
									label='All Products'
								/>
								<MenuItem
									onClick={onAddProduct}
									label='Add Products'
								/>
								<MenuItem
									onClick={() => {
										router.push('/myProducts');
									}}
									label='My Products'
								/>
								<hr />
								<MenuItem
									onClick={() => signOut()}
									label='Logout'
								/>
							</>
						) : currentUser?.role === 'seller' ? (
							<div>
								<MenuItem
									onClick={onAddProduct}
									label='Add product'
								/>

								<MenuItem
									onClick={() => {
										router.push('/myOrders');
									}}
									label='My orders'
								/>
								<hr />
								<MenuItem
									onClick={() => signOut()}
									label='Logout'
								/>
							</div>
						) : currentUser?.role === 'user' ? (
							<>
								<MenuItem
									onClick={() => {
										router.push('/cart');
									}}
									label='Cart'
								/>
								<MenuItem
									onClick={() => {
										router.push('/favoriteProduct');
									}}
									label='Favorites'
								/>
								<MenuItem
									onClick={() => {}}
									label='My orders'
								/>
								<hr />
								<MenuItem
									onClick={() => signOut()}
									label='Logout'
								/>
							</>
						) : (
							<>
								<MenuItem
									onClick={loginModal.onOpen}
									label='Login'
								/>
								<MenuItem
									onClick={registerModal.onOpen}
									label='Sign up'
								/>
								<MenuItem
									onClick={SellerModal.onOpen}
									label='Be a seller'
								/>
							</>
						)}
					</div>
				</div>
			)}
		</div>
	);
};

export default UserMenu;
