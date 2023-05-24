'use client';

import { store } from '@/redux/store';
import { SessionProvider } from 'next-auth/react';
import { Provider } from 'react-redux';

interface ContainerProps {
	children: React.ReactNode;
}

const Container: React.FC<ContainerProps> = ({ children }) => {
	return (
		<Provider store={store}>
			<SessionProvider>
				<div className='max-w-[2520px] mx-auto '>{children}</div>
			</SessionProvider>
		</Provider>
	);
};

export default Container;
