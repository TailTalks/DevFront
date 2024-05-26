import React from 'react';

interface GoalProps {
	pictureURL: string,
	text: string
}

const Goal: React.FC<GoalProps> = ({pictureURL, text}) => {
	return (
		<div className='w-[453px] h-[453px]'>
			<p className='font-Rubic variable text-lg dark:text-white text-[#4D4D4D]'>
				{text}
			</p>
			<img src={pictureURL} alt="" className='w-[433px] h-[271px] rounded-2xl'/>
		</div>
	);
};

export default Goal;