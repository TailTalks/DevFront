import React from 'react';

interface HowItWorksSectionProps {
	theme: boolean
}

const HowItWorksSection: React.FC<HowItWorksSectionProps> = ({theme}) => {
	return (
		<div id='how_it_works' className='w-full h-[568px] mt-36'>
							<div className='container mx-auto px-4 3xl:px-10 h-16 font-sans text-[#000000] dark:text-white text-5xl font-medium'>
								Как работает Tail Talks?
							</div>
							<div className={theme? 'mx-auto w-[95%] scroll-container scroll-container-dark mt-[30px] pb-8 flex overflow-x-auto'
							: 'mx-auto w-[95%] scroll-container scroll-container-light mt-[30px] pb-8 flex overflow-x-auto'}>
								<div className="rounded-l-xl 2xl:grow w-96 min-w-96 h-[437px] bg-step-1 bg-center bg-cover flex flex-col justify-end">
									<div className='pl-10 pr-8 pb-12'>
										<h3 className='font-sans font-bold text-white text-[26px]'>
											Шаг 1
										</h3>
										<p className='text-[#F3F3F3F2] font-light font-Rubik Variable text-lg pt-4'>
											Загрузи фотографии своего питомца
										</p>
									</div>
								</div>
								<div className="2xl:grow w-96 min-w-96 h-[437px] bg-step-2 bg-center bg-cover flex flex-col justify-end">
									<div className='pl-10 pr-8 pb-12'>
										<h3 className='font-sans font-bold text-white text-[26px]'>
											Шаг 2
										</h3>
										<p className='text-[#F3F3F3F2] font-light font-Rubik Variable text-lg pt-4'>
										Делись публикациями со своими друзьями и собирай лайки
										</p>
									</div>
								</div>
								<div className="2xl:grow w-96 min-w-96 h-[437px] bg-step-3 bg-center bg-cover flex flex-col justify-end">
									<div className='pl-10 pr-8 pb-12'>
										<h3 className='font-sans font-bold text-white text-[26px]'>
											Шаг 3
										</h3>
										<p className='text-[#F3F3F3F2] font-light font-Rubik Variable text-lg pt-4'>
											Алгоритмы ИИ позволят легко преобразить фотографию питомца
										</p>
									</div>
								</div>
								<div className="2xl:grow w-96 min-w-96 h-[437px] bg-step-4 bg-center bg-cover flex flex-col justify-end">
									<div className='pl-10 pr-8 pb-12'>
										<h3 className='font-sans font-bold text-white text-[26px]'>
											Шаг 4
										</h3>
										<p className='text-[#F3F3F3F2] font-light font-Rubik Variable text-lg pt-4'>
										Алгоритмы ИИ продвинут фото вашего питомца
										</p>
									</div>
								</div>
								<div className="rounded-r-xl 2xl:grow w-96 min-w-96 h-[437px] bg-step-5 bg-center bg-cover flex flex-col justify-end">
									<div className='pl-10 pr-8 pb-12'>
										<h3 className='font-sans font-bold text-white text-[26px]'>
											Шаг 5
										</h3>
										<p className='text-[#F3F3F3F2] font-light font-Rubik Variable text-lg pt-4'>
										Участвуй в фотоконкурсах и забирай награды
										</p>
									</div>
								</div>
							</div>
						</div>
	);
};

export default HowItWorksSection;