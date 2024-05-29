import React, {useState} from 'react';

interface FAQItemProps {
	question: string,
	answer: string,
}

const FAQItem: React.FC<FAQItemProps> = ({question, answer}) => {

	const [isAnswerShown, setIsAnswerShown] = useState(false);

	return (
		<div>
			<div className='bg-bread rounded-2xl p-1 h-[84px] mt-[30px]'>
				<div onClick={() => setIsAnswerShown(!isAnswerShown)} className='w-full h-full bg-clip-border rounded-xl px-[35px] bg-white dark:bg-[#000000] flex justify-between items-center cursor-pointer'>
					<span className='dark:text-white font-Rubic variable text-xl font-normal'>
						{question}
					</span>
					{ isAnswerShown
							?
							<svg width="100px" height="80px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path className='dark:stroke-white' d="M17 15L12 10L7 15" stroke="#000000" strokeWidth="0.5" strokeLinecap="round" strokeLinejoin="round"/>
							</svg>
							:
						<svg className='' width="100px" height="80px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path className='dark:stroke-white' d="M7 10L12 15L17 10" stroke="#000000" strokeWidth="0.5" strokeLinecap="round" strokeLinejoin="round"/>
						</svg> }
				</div>
			</div>
			<div className={isAnswerShown ? 'scale-y-100 duration-700 h-[100px] flex items-center' : 'scale-y-0 duration-700 h-[0px]'}>
				<p className=' dark:text-white font-Rubic variable text-xl font-light px-[35px]'>
					{answer}
				</p>
			</div>
		</div>
	);
};

export default FAQItem;