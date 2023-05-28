'use client';
import React from 'react';
import { formatDistanceToNow, parseISO } from 'date-fns';
import { SafeUser } from '../types';
import { MdDeleteForever } from 'react-icons/md';
import Image from 'next/image';
import Button from './Button';
import getOrders from '../actions/getOrders';

interface Props {
	productData: any;
	currentUser?: any;
	usersData: any;
	ordersData: any;
}

const SellerPage: React.FC<Props> = ({
	currentUser,
	usersData,
	productData,
	ordersData,
}) => {
	const formatDateAndDuration = (createdAt: string) => {
		const createdAtDate = parseISO(createdAt);
		const formattedDate = createdAtDate.toLocaleDateString();

		const duration = formatDistanceToNow(createdAtDate, {
			addSuffix: true,
		});

		return { formattedDate, duration };
	};

	const { formattedDate, duration } = formatDateAndDuration(
		currentUser?.createdAt
	);

	const productIDs = ordersData.map((item: any) => item.productIds);
	console.log('productData: ', productData);

	// const filteredProducts = productData.filter((product: any) =>
	// 	productIDS.includes(product.id)
	// );

	// console.log(filteredProducts);

	const data: any = [];

	for (let i = 0; i < productIDs.length; i++) {
		for (let j = 0; j < productIDs[i].length; j++) {
			if (data.indexOf(productIDs[i][j]) === -1) {
				data.push(productIDs[i][j]);
			}
		}
	}
	console.log(data);

	const filteredProducts = productData.filter((product: any) =>
		data.includes(product.id)
	);

	console.log('filter: ', filteredProducts);
	return (
		<div className='py-6 px-4'>
			<div className='text-center pb-6'>
				<h1 className='text-blue font-extrabold text-4xl'>
					You are seller (Name: {currentUser?.name})
				</h1>
			</div>
			<hr />
			<div className='w-full bg-white flex gap-4 my-4'>
				<div className='w-1/3 h-auto rounded-lg shadow-bannerShadow'>
					<div className='py-5 flex flex-col justify-center items-center'>
						<div className='avatar'>
							<div className='w-24 rounded-full'>
								<Image
									src={
										currentUser?.image ||
										'https://i.ibb.co/MMXXYTT/placeholder.jpg'
									}
									alt='img'
									width={100}
									height={100}
								/>
							</div>
						</div>
						<div>
							<div className='space-y-3'>
								<p>
									<span className='font-bold'>Name:</span>{' '}
									{currentUser?.name}
								</p>
								<p>
									<span className='font-bold'>Name:</span>{' '}
									{currentUser?.email}
								</p>
								<p>
									<span className='font-bold'>ID:</span>{' '}
									{currentUser?.id}
								</p>
								<p>
									<span className='font-bold'>
										Joined at:
									</span>{' '}
									{formattedDate}
								</p>
								<p>
									<span className='font-bold'>Duration:</span>{' '}
									{duration}
								</p>
							</div>
						</div>
					</div>
				</div>

				<div className='w-2/3 rounded-lg shadow-bannerShadow flex flex-col'>
					<p className='text-blue font-bold py-4 text-center text-2xl'>
						List of your products ({productData.length})
					</p>
					<div className='overflow-x-auto w-full'>
						<div className='overflow-x-auto w-full'>
							<table className='table table-zebra  w-full'>
								{/* head */}
								<thead>
									<tr>
										<th>No.</th>
										<th>Name</th>
										<th>Price</th>
										<th>Action</th>
									</tr>
								</thead>
								{productData.map((item: any, index: any) => (
									<tbody key={index}>
										{/* row 1 */}
										<tr>
											<th>{index + 1}</th>
											<td>
												<div className='flex items-center space-x-3'>
													<div className='avatar'>
														<div className='mask mask-squircle w-12 h-12'>
															<Image
																src={item.image}
																alt='img'
																width={50}
																height={50}
															/>
														</div>
													</div>
													<div>
														<div className='font-bold'>
															{item.title}
														</div>
														<div className='text-sm opacity-50'>
															{item.brand}
														</div>
													</div>
												</div>
											</td>
											<td>
												<div>
													<p>${item.price}</p>
													<p className='line-through text-[12px] text-neutral-500'>
														${item.oldPrice}
													</p>
												</div>
											</td>
											<td>
												<div>
													<Button
														onClick={() => {}}
														icon={MdDeleteForever}
														label='Delete'
													/>
												</div>
											</td>
										</tr>
									</tbody>
								))}
							</table>
						</div>
					</div>
				</div>
			</div>
			<div className='py-5'>
				<h1 className='py-5 font-extrabold text-center text-3xl text-blue'>
					List of all orders ({ordersData.length})
				</h1>
			</div>
		</div>
	);
};

export default SellerPage;
