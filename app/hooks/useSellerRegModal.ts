import { create } from 'zustand';

interface SellerRegisterModalStore {
	isOpen: boolean;
	onOpen: () => void;
	onClose: () => void;
}

const useSellerRegisterModal = create<SellerRegisterModalStore>((set) => ({
	isOpen: false,
	onOpen: () => set({ isOpen: true }),
	onClose: () => set({ isOpen: false }),
}));

export default useSellerRegisterModal;
