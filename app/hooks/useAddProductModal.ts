import { create } from 'zustand';

interface AddProductStore {
	isOpen: boolean;
	onOpen: () => void;
	onClose: () => void;
}

const useAddProductModal = create<AddProductStore>((set) => ({
	isOpen: false,
	onOpen: () => set({ isOpen: true }),
	onClose: () => set({ isOpen: false }),
}));

export default useAddProductModal;
