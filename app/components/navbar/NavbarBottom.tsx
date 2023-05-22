'use client';
import { phoneImg } from '@/public/assets/images/images';
import Image from 'next/image';
import { FiChevronDown } from 'react-icons/fi';
import { FaPlaceOfWorship } from 'react-icons/fa';
import { MdOutlineLocationOn } from 'react-icons/md';

const NavbarBottom = () => {
	return (
		<div className='max-w-container mx-auto py-2 px-6 flex items-center justify-between'>
			<div className='flex items-center gap-5'>
				<div className='flex items-center gap-2'>
					<Image className='w-6' alt='phone' src={phoneImg} />
					<p className='text-sm font-semibold'>
						How do you want your items?
					</p>
					<FiChevronDown />
					<span className='w-[1px] h-4 bg-white inline-flex ml-2'></span>
				</div>
				<div className='flex items-center gap-2'>
					<MdOutlineLocationOn />
					<p className='text-sm font-semibold'>
						Sacramento, CA 94203
					</p>
					<FaPlaceOfWorship />
					<p>Sacramento Supercenter</p>
				</div>
			</div>
			<div className='hidden lgl:block'>
				<ul className='flex gap-6 text-sm font-semibold'>
					<li className='bottomLi'>Deals</li>
					<li className='bottomLi'>Easter</li>
					<li className='bottomLi'>Grocery & essentials</li>
					<li className='bottomLi'>Home</li>
					<li className='bottomLi'>Tech</li>
					<li className='bottomLi'>Fashion</li>
					<li className='bottomLi'>Auto</li>
					<li className='bottomLi'>Walmart+</li>
				</ul>
			</div>
		</div>
	);
};

export default NavbarBottom;
