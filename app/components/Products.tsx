'use client';
import { addToCart } from '@/redux/e_shopSlice';
import { Item } from '@/app/types/type';
import Image from 'next/image';
import Link from 'next/link';
import { BsStarFill } from 'react-icons/bs';
import { GoPlus } from 'react-icons/go';
import { useDispatch } from 'react-redux';
import toast, { Toaster } from 'react-hot-toast';
import HeartButton from './HeartButton';
import { SafeUser } from '../types';

interface Props {
	productData: any;
	currentUser?: any;
}

const Products = ({ productData, currentUser }: Props) => {
	// location = window.location;
	const dispatch = useDispatch();

	return (
		<div className='py-6 px-4 grid grid-cols-4 gap-4'>
			{productData.map((item: any) => (
				<div
					key={item.id}
					className='border-[1px] border-gray-200 mb-6 group   '
				>
					<div className='w-full h-[350px] overflow-hidden p-1'>
						<div className='aspect-square w-full relative overflow-hidden rounded-xl '>
							<Image
								className='object-cover group-hover:scale-110 transition '
								width={300}
								height={300}
								src={item.image}
								alt='item image'
							/>
							<div className='absolute top-3 right-3'>
								{location.pathname === '/favoriteProduct' ? (
									<HeartButton
										productId={item.id}
										currentUser={currentUser}
									/>
								) : null}
							</div>
						</div>
					</div>
					{/* description */}
					<div className='px-2 py-4 flex flex-col justify-center'>
						<div className='flex justify-between items-center py-2'>
							<button
								onClick={() => {
									dispatch(
										addToCart({
											id: item.id,
											userId: item.userId,
											title: item.title,
											image: item.image,
											price: item.price,
											oldPrice: item.oldPrice,
											description: item.description,
											quantity: 1,
											category: item.category,
											brand: item.brand,
										})
									);
									toast.success(
										`${item.title} is added to cart`
									);
								}}
								className='w-20 h-9 bg-blue text-white rounded-full flex gap-1 items-center justify-center hover:bg-[#004f9a] duration-300'
							>
								<span>
									<GoPlus />
								</span>
								Add
							</button>
							<Link
								href={{
									pathname: `/product/${item.id}`,
									query: {
										id: item.id,
										userId: item.userId,
										title: item.title,
										image: item.image,
										price: item.price,
										oldPrice: item.oldPrice,
										description: item.description,
										category: item.category,
										brand: item.brand,
									},
								}}
								// as={`/product/${item._id}`}
							>
								<button className='w-24 h-9 bg-white text-black hover:text-white border border-black hover:border-none rounded-full flex gap-1 items-center justify-center hover:bg-blue duration-300'>
									<span>
										<GoPlus />
									</span>
									Details
								</button>
							</Link>
						</div>
						<div className='flex items-center gap-3 '>
							<p className='text-lg text-green-700 font-semibold '>
								Now ${item.price}
							</p>
							<p className='text-gray-500 line-through decoration-[1px]'>
								{item.oldPrice}
							</p>
						</div>
						<p className='text-lg font-semibold py-2'>
							{item.title.substring(0, 25)}
						</p>
						<p>{item.description.substring(0, 80)}...</p>
						<div className='flex fap-2 items-center text-sm mt-2'>
							<div className='flex text-sm gap-1 items-center'>
								<BsStarFill />
								<BsStarFill />
								<BsStarFill />
								<BsStarFill />
								<BsStarFill />
								<p>25</p>
							</div>
						</div>
					</div>
				</div>
			))}
		</div>
	);
};

export default Products;
