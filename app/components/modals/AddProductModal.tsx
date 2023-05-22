'use client';

import useAddProductModal from '@/app/hooks/useAddProductModal';
import Modal from './Modal';
import { useMemo, useState } from 'react';
import Heading from '../Heading';
import { categories } from '@/app/Categories';
import CategoryInput from '../inputs/CategoryInput';
import {
	FieldValue,
	FieldValues,
	SubmitHandler,
	useForm,
} from 'react-hook-form';
import ImageUpload from '../inputs/ImageUpload';
import Input from '../inputs/Input';
import axios from 'axios';
import { toast } from 'react-hot-toast';
import { useRouter } from 'next/navigation';

enum STEPS {
	CATEGORY = 0,
	IMAGE = 1,
	DESCRIPTION = 2,
	PRICE = 3,
}

const AddProductModal = () => {
	const router = useRouter();
	const addProductModal = useAddProductModal();

	const [step, setStep] = useState(STEPS.CATEGORY);
	const [isLoading, setIsLoading] = useState(false);

	const {
		register,
		handleSubmit,
		setValue,
		watch,
		formState: { errors },
		reset,
	} = useForm<FieldValues>({
		defaultValues: {
			title: '',
			description: '',
			oldPrice: '1',
			price: '1',
			brand: '',
			category: '',
			image: '',
		},
	});
	const category = watch('category');
	const image = watch('image');

	const setCustomValue = (id: string, value: any) => {
		setValue(id, value),
			{
				shouldValidate: true,
				shouldDirty: true,
				shouldTouch: true,
			};
	};

	const onBack = () => {
		setStep((value) => value - 1);
	};

	const onNext = () => {
		setStep((value) => value + 1);
	};

	const onSubmit: SubmitHandler<FieldValues> = async (data) => {
		if (step !== STEPS.PRICE) {
			return onNext();
		}
		setIsLoading(true);
		axios
			.post('/api/products', data)
			.then(() => {
				toast.success('Product added successfully');
				router.refresh();
				reset();
				setStep(STEPS.CATEGORY);
				addProductModal.onClose();
			})
			.catch(() => {
				toast.error('Something went wrong');
			})
			.finally(() => {
				setIsLoading(false);
			});
	};

	const actionLabel = useMemo(() => {
		if (step === STEPS.PRICE) {
			return 'Add product';
		}
		return 'Next';
	}, [step]);

	const secondaryActionLabel = useMemo(() => {
		if (step === STEPS.CATEGORY) {
			return undefined;
		}

		return 'Back';
	}, [step]);

	let bodyContent = (
		<div className='flex flex-col gap-8'>
			<Heading
				title='Which category does your product belong to?'
				subtitle='Pick a category'
			/>
			<div className='grid grid-cols-1 md:grid-cols-2 gap-3 max-h-[50vh] overflow-y-auto'>
				{categories.map((item) => (
					<div key={item.label} className='col-span-1'>
						<CategoryInput
							onClick={(category) =>
								setCustomValue('category', category)
							}
							selected={category === item.label}
							label={item.label}
							icon={item.icon}
						/>
					</div>
				))}
			</div>
		</div>
	);

	if (step === STEPS.IMAGE) {
		bodyContent = (
			<div className='flex flex-col gap-8'>
				<Heading
					title='Add a photo of your product'
					subtitle='Pick a photo'
				/>
				<ImageUpload
					value={image}
					onChange={(value) => setCustomValue('image', value)}
				/>
			</div>
		);
	}

	if (step === STEPS.DESCRIPTION) {
		bodyContent = (
			<div className='flex flex-col gap-8'>
				<Heading
					title='Add a description of your product'
					subtitle='Add a description'
				/>
				<Input
					id='title'
					label='Title'
					disabled={isLoading}
					register={register}
					errors={errors}
					required
				/>
				<hr />
				<Input
					id='brand'
					label='Brand'
					disabled={isLoading}
					register={register}
					errors={errors}
					required
				/>
				<hr />
				<Input
					id='description'
					label='Description'
					disabled={isLoading}
					register={register}
					errors={errors}
					required
				/>
			</div>
		);
	}

	if (step === STEPS.PRICE) {
		bodyContent = (
			<div className='flex flex-col gap-8'>
				<Heading
					title='Add a price of your product'
					subtitle='Add a price'
				/>
				<Input
					id='oldPrice'
					label='Old price'
					type='number'
					formatPrice
					disabled={isLoading}
					register={register}
					errors={errors}
					required
				/>
				<hr />
				<Input
					id='price'
					label='New Price'
					type='number'
					formatPrice
					disabled={isLoading}
					register={register}
					errors={errors}
					required
				/>
			</div>
		);
	}

	return (
		<Modal
			isOpen={addProductModal.isOpen}
			onClose={addProductModal.onClose}
			onSubmit={handleSubmit(onSubmit)}
			actionLabel={actionLabel}
			secondaryActionLabel={secondaryActionLabel}
			secondaryAction={step === STEPS.CATEGORY ? undefined : onBack}
			title='Add your product'
			body={bodyContent}
		/>
	);
};

export default AddProductModal;
