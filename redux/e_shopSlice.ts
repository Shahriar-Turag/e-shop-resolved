import { createSlice } from '@reduxjs/toolkit';
import { StoreProduct, User } from '@/app/types/type';
import getCurrentUser from '@/app/actions/getCurrentUser';
import { SafeUser } from '@/app/types';

interface ProductState {
	productData: StoreProduct[];
	userData: User[];
}

const initialState: ProductState = {
	productData: [],
	userData: [],
};

export const e_shopSlice = createSlice({
	name: 'e_shop',
	initialState,
	reducers: {
		addToCart: (state, action) => {
			const item = state.productData.find(
				(item: StoreProduct) => item.id == action.payload.id
			);

			if (item) {
				item.quantity += action.payload.quantity;
			} else {
				state.productData = [...state.productData, action.payload];
			}
			console.log(state);
		},
		plusQuantity: (state, action) => {
			const item = state.productData.find(
				(item: StoreProduct) => item.id === action.payload.id
			);
			if (item) {
				item.quantity++;
			}
		},
		minusQuantity: (state, action) => {
			const item = state.productData.find(
				(item: StoreProduct) => item.id === action.payload.id
			);
			if (item?.quantity === 1) {
				item.quantity = 1;
			} else {
				item!.quantity--;
			}
		},
		removeFromCart: (state, action) => {
			state.productData = state.productData.filter(
				(item: StoreProduct) => item.id !== action.payload.id
			);
		},
		resetCart: (state) => {
			state.productData = [];
		},
		addUser: (state, action) => {
			const users = state.userData.find(
				(user: User) => user.id === action.payload.id
			);

			if (users) {
				users.id += action.payload.id;
			}
		},
		removeUser: (state) => {
			state.userData = [];
		},
	},
});

export const {
	addToCart,
	plusQuantity,
	minusQuantity,
	removeFromCart,
	resetCart,
	addUser,
	removeUser,
} = e_shopSlice.actions;
export default e_shopSlice.reducer;
