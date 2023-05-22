'use client';
interface BannerTextProps {
	title: string;
	description: string;
	btnText: string;
	className: string;
}

const BannerText = ({
	title,
	description,
	btnText,
	className,
}: BannerTextProps) => {
	return (
		<div className={className}>
			<h1 className='font-bold text-2xl'>{title}</h1>
			<p className='text-sm leading-5'>{description}</p>
			<button className='bg-white text-sm text-black font-semibold rounded-full w-24 h-8 hover:bg-blue hover:text-white hover:border-none duration-300 border-[1px] border-black '>
				{btnText}
			</button>
		</div>
	);
};

export default BannerText;
