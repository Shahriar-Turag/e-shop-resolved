export interface Product {
	id: number;
	userId: string;
	title: string;
	oldPrice: number;
	price: number;
	description: string;
	brand: string;
	image: string;
	category: string;
}
[];

export interface Item {
	id: number;
	userId: string;
	title: string;
	oldPrice: number;
	price: number;
	description: string;
	brand: string;
	image: string;
	category: string;
}
[];
export interface StoreProduct {
	id: number;
	userId: string;
	title: string;
	description: string;
	image: string;
	price: number;
	brand: string;
	category: string;
	quantity: number;
	oldPrice: number;
	cart: string[];
	userId: number;
}

export interface User {
	id: string;
	name: string;
	email: string;
}
[];
