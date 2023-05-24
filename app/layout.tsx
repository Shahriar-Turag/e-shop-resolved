import { Nunito } from 'next/font/google';
import '../styles/globals.css';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
// import AppWrapper from './components/AppWrapper';
import ClientOnly from './components/ClientOnly';
import { Product } from './types/type';
import getCurrentUser from './actions/getCurrentUser';
import Navbar from './components/navbar/Navbar';
import LoginModal from './components/modals/LoginModal';
import RegisterModal from './components/modals/RegisterModal';
import SellerRegModal from './components/modals/SellerRegModal';
import AddProductModal from './components/modals/AddProductModal';
import TopFooter from './components/TopFooter';
import Footer from './components/Footer';
import ToasterProvider from './providers/ToasterProvider';
import Container from './components/Container';

// import RentModal from './components/modals/RentModal';

export const metadata = {
	title: 'e-shop.com',
	description: 'Your shopping destination for the latest fashion trends.',
};

const font = Nunito({
	subsets: ['latin'],
});

// interface Props {
// 	children: React.ReactNode;
// }

export default async function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	const currentUser = await getCurrentUser();

	return (
		<html lang='en'>
			<body className={font.className}>
				<ClientOnly>
					<Container>
						<Navbar currentUser={currentUser} />
						<LoginModal />
						<RegisterModal />
						<SellerRegModal />
						<AddProductModal />
						<main>{children}</main>
						<TopFooter />
						<Footer />
						<ToasterProvider />
					</Container>
				</ClientOnly>

				{/* <div className='pb-20 pt-28'>{children}</div> */}
			</body>
		</html>
	);
}
