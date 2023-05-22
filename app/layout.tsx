import { Nunito } from 'next/font/google';
import '../styles/globals.css';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import AppWrapper from './components/AppWrapper';
import ClientOnly from './components/ClientOnly';
import { Product } from './types/type';
import getCurrentUser from './actions/getCurrentUser';

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
					<AppWrapper currentUser={currentUser}>
						{children}
					</AppWrapper>
				</ClientOnly>

				{/* <div className='pb-20 pt-28'>{children}</div> */}
			</body>
		</html>
	);
}
