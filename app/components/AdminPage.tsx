import React, { use } from 'react';
import { SafeUser } from '../types';
import UserTable from './UserTable';

interface Props {
	currentUser?: SafeUser | null;
	usersData: any;
}
const AdminPage: React.FC<Props> = ({ currentUser, usersData }) => {
	const admin = usersData.filter((user: any) => user.role === 'admin');
	const seller = usersData.filter((user: any) => user.role === 'seller');
	const user = usersData.filter((user: any) => user.role === 'user');
	return (
		<div className='py-6 px-4 '>
			<div className='text-center pb-6'>
				<h1 className='text-blue font-extrabold text-4xl'>
					You are admin (Name: {currentUser?.name})
				</h1>
				<p>Number of admins: {admin.length}</p>
			</div>
			<hr />
			<div className='w-full bg-white flex gap-4 my-4'>
				<div className='w-1/2 rounded-lg shadow-bannerShadow'>
					<p className='text-blue font-bold py-4 text-center text-2xl'>
						List of sellers ({seller.length})
					</p>
					<UserTable
						label='Name'
						secondaryLabel='Email'
						bodyContent={seller.map((data: any, index: number) => (
							<>
								<tr key={index}>
									<th>{index + 1}</th>
									<td>{data.name}</td>
								</tr>
							</>
						))}
						secondaryBodyContent={seller.map(
							(data: any, index: number) => (
								<>
									<tr key={index}>
										<td>{data.email}</td>
									</tr>
								</>
							)
						)}
					/>
				</div>

				<div className='w-1/2 rounded-lg shadow-bannerShadow flex flex-col'>
					<p className='text-blue font-bold py-4 text-center text-2xl'>
						List of users ({user.length})
					</p>
					<UserTable
						label='Name'
						secondaryLabel='Email'
						bodyContent={user.map((data: any, index: number) => (
							<>
								<tr key={index}>
									<th>{index + 1}</th>
									<td>{data.name}</td>
								</tr>
							</>
						))}
						secondaryBodyContent={user.map(
							(data: any, index: number) => (
								<>
									<tr key={index}>
										<td>{data.email}</td>
									</tr>
								</>
							)
						)}
					/>
				</div>
			</div>
		</div>
	);
};

export default AdminPage;
