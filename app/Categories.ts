'use client';

import { MdElectricalServices } from 'react-icons/md';
import { FaHome } from 'react-icons/fa';
import { GiClothes } from 'react-icons/gi';
import { HiWrenchScrewdriver } from 'react-icons/hi2';
import { MdGirl } from 'react-icons/md';
import { IconType } from 'react-icons';

export const categories = [
	{
		label: 'Electronics',
		icon: MdElectricalServices,
	},
	{
		label: 'Home Decoration',
		icon: FaHome,
	},
	{
		label: 'Fashion',
		icon: GiClothes,
	},
	{
		label: 'Equipments',
		icon: HiWrenchScrewdriver,
	},
	{
		label: 'Beauty Products',
		icon: MdGirl,
	},
];
