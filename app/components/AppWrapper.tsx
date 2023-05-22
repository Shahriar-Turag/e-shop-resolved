'use client';

import { persistor, store } from '@/redux/store';

import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import ToasterProvider from '../providers/ToasterProvider';
import CartPage from './CartPage';
import ClientOnly from './ClientOnly';
import Footer from './Footer';
import LoginModal from './modals/LoginModal';
import RegisterModal from './modals/RegisterModal';
import Navbar from './navbar/Navbar';
import TopFooter from './TopFooter';
import SellerRegModal from './modals/SellerRegModal';
import AddProductModal from './modals/AddProductModal';
import { SessionProvider } from 'next-auth/react';

interface AppWrapperProps {
	children: React.ReactNode;
	currentUser: any;
}

const AppWrapper: React.FC<AppWrapperProps> = ({ children, currentUser }) => {
	return (
		<Provider store={store}>
			<SessionProvider>
				<PersistGate loading='loading' persistor={persistor}>
					<ClientOnly>
						<Navbar currentUser={currentUser} />
						<LoginModal />
						<RegisterModal />
						<SellerRegModal />
						<AddProductModal />
						<main>{children}</main>
						<TopFooter />
						<Footer />
						<ToasterProvider />
					</ClientOnly>
				</PersistGate>
			</SessionProvider>
		</Provider>
	);
};

export default AppWrapper;
