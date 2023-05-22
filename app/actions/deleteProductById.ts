import prisma from '@/app/libs/prismadb';
import { toast } from 'react-hot-toast';

export default async function deleteProductById(id: string) {
	//delete one product by id
	const deleteProduct = await prisma.products.delete({
		where: {
			id: id,
		},
	});
	return deleteProduct;
}
