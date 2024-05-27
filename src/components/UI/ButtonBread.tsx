import React from 'react';

interface ButtonBreadProps {
	name: string,
	onClick?: () => void
}

const ButtonBread: React.FC<ButtonBreadProps> = (props) => {
	return (
		<button {...props} className='font-sans font-bold text-lg 3xl:text-2xl w-96 h-16 3xl:w-96 3xl:h-24 rounded-2xl bg-bread mt-10'>
			{props.name}
		</button>
	);
};

export default ButtonBread;