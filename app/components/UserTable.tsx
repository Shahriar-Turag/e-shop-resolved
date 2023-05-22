'use client';
interface TableProps {
	label: string;
	secondaryLabel?: string;
	bodyContent: string;
	secondaryBodyContent?: string;
	action?: string;
	//action content would be a button
	actionContent?: string;
}

const UserTable: React.FC<TableProps> = ({
	label,
	bodyContent,
	secondaryLabel,
	secondaryBodyContent,
	action,
	actionContent,
}) => {
	return (
		<div className='overflow-x-auto w-full'>
			<table className='table  w-full'>
				{/* head */}
				<thead>
					<tr>
						<th>{label}</th>
						<th>{secondaryLabel}</th>
						<th>{action}</th>
					</tr>
				</thead>
				<tbody>
					{/* row 1 */}
					<tr>
						<td>{bodyContent}</td>
						<td>{secondaryBodyContent}</td>
						<td>{actionContent}</td>
					</tr>
				</tbody>
			</table>
		</div>
	);
};

export default UserTable;
