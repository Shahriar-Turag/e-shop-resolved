'use client';
import Image from 'next/image';
import React, { useState, useEffect } from 'react';
import { logo } from '../../../public/assets/images/images/index';
import { AiFillDatabase, AiOutlineHeart } from 'react-icons/ai';
import { HiAdjustments } from 'react-icons/hi';
import { IoSearchOutline } from 'react-icons/io5';
import { BsCart2 } from 'react-icons/bs';
import NavbarBottom from '../navbar/NavbarBottom';
import Link from 'next/link';
import { useDispatch, useSelector } from 'react-redux';
import UserMenu from './UserMenu';

import { SafeUser } from '@/app/types';
import { useSession } from 'next-auth/react';
import { addUser, removeUser } from '@/redux/e_shopSlice';

interface NavbarProps {
	currentUser?: SafeUser | null;
}

const Navbar = ({ currentUser }: NavbarProps) => {
	const { data: session } = useSession();
	// console.log('session', session);

	const dispatch = useDispatch();

	const productData = useSelector((state: any) => state.e_shop.productData);

	// console.log('productData', productData);

	const [totalAmount, setTotalAmount] = useState('');

	useEffect(() => {
		if (session) {
			dispatch(
				addUser({
					name: session.user?.name,
					email: session.user?.email,
					image: session.user?.image,
				})
			);
		} else {
			dispatch(removeUser());
		}
	}, [session, dispatch]);

	useEffect(() => {
		let price = 0;
		productData.forEach((item: any) => {
			price += item.price * item.quantity;
			return price;
		});
		setTotalAmount(price.toFixed(2));
	}, [productData]);

	return (
		<div className='width-full bg-blue text-white sticky top-0 z-50'>
			<div className='max-w-container mx-auto h-20 px-4 flex justify-between items-center gap-2'>
				{/* logo */}
				<Link href='/'>
					<div className='navbarHover'>
						<Image
							className='max-w-[180px] mx-auto'
							alt='logo'
							src={logo}
						/>
					</div>
				</Link>
				{/* department */}
				<div className='navbarHover'>
					<div>
						<span>
							<AiFillDatabase />
						</span>
					</div>
					<p className='text-base font-semibold'>Departments</p>
				</div>
				{/* services */}
				<div className='navbarHover'>
					<div>
						<span>
							<HiAdjustments />
						</span>
					</div>
					<p className='text-base font-semibold'>Services</p>
				</div>
				{/* search box */}
				<div className='h-10 flex flex-1 relative'>
					<input
						type='text'
						placeholder='Search for products'
						className='h-full w-full rounded-full px-4 text-black text-base outline-none border-[1px] border-transparent focus-visible:border-black duration-200'
					/>
					<span className='absolute w-8 h-8 rounded-full flex items-center justify-center top-1 right-1 bg-yellow text-black text-xl'>
						<IoSearchOutline />
					</span>
				</div>
				{/* my items */}
				<div className='navbarHover '>
					<AiOutlineHeart />
					<div>
						<p className='text-xs'>Reorder</p>
						<h2 className='text-base font-semibold -mt-1'>
							My Items
						</h2>
					</div>
				</div>
				{/* Accounts */}
				<UserMenu currentUser={currentUser} />
				{/* cart */}
				<Link href='/cart'>
					<div className='flex flex-col justify-center items-center gap-2 h-12 px-5 rounded-full bg-transparent hover:bg-hoverBg duration-300 relative'>
						<BsCart2 className='text-2xl' />
						<p className='text-[10px] -mt-2'>${totalAmount}</p>
						<span className='absolute w-4 h-4 bg-yellow text-black top-0 right-4 rounded-full flex items-center justify-center font-bodyFont text-xs'>
							{productData.length > 0 ? productData.length : 0}
						</span>
					</div>
				</Link>
			</div>
			<hr />
			<NavbarBottom />
		</div>
	);
};

export default Navbar;
