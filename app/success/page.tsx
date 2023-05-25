'use client';
import { useRouter } from 'next/navigation';
import React from 'react';
import { MdArrowForward } from 'react-icons/md';

const SuccessPage = () => {
	const router = useRouter();
	return (
		<div className='w-full h-[60vh] flex items-center justify-center py-20'>
			<div className='flex flex-col gap-2 items-center justify-center'>
				<h1 className='text-4xl text-hoverBg font-extrabold'>
					Thank you for shopping
				</h1>
				<button
					onClick={() => router.push('/')}
					className='text-lg text-light hover:underline underline-offset-4 decoration-[1px] hover:text-blue duration-300 flex items-center font-bold'
				>
					Continue shopping &nbsp;
					<span>
						<MdArrowForward />
					</span>
				</button>
			</div>
		</div>
	);
};

export default SuccessPage;
