import React from 'react';
import ButtonBread from '../../UI/ButtonBread';
import dogWithToy1440 from '../../../assets/pictures/main/dog_with_toy_1440.jpg'
import dogWithToy1024 from '../../../assets/pictures/main/dog_with_toy_1024.jpg'

interface PreRegistrationSectionProps {
	clickHandler: () => void
}

const PreRegistrationSection: React.FC<PreRegistrationSectionProps> = ({clickHandler}) => {

	return (
		<div>
			<div className='container mx-auto px-4 3xl:px-10 flex justify-between w-full h-[355px] 3xl:h-[550px] mt-36 gap-x-4'>
				<div className='w-1/2'>
				<picture>
					<source media="(min-width:1024px)" srcSet={dogWithToy1024} />
  				<source media="(min-width:1440px)" srcSet={dogWithToy1440} />
					<img className='w-[440px] h-[330px] xl:w-[590px] xl:h-[350px] 3xl:w-[900px] 3xl:h-[515px] rounded-2xl 3xl:rounded-3xl' src={dogWithToy1440} alt='MissionCat' />
				</picture>
				</div>
				<div className='w-1/2 2xl:grow 3xl:pr-96'>
					<div className='w-full mt-7 3xl:mt-9 font-Rubik text-[#000000] dark:text-[#F3F3F3] text-xl 3xl:text-4xl font-light'>
						<p>
						Станьте первопроходцем в мире любви и заботы о питомцах! Оставьте E-mail для предварительной регистрации на нашей платформе сегодня и вы не только получите возможность быть в центре внимания самой большой аудитории любителей животных, но и откроете дверь к звездному статусу для вашего питомца!
						</p>
						<p className='mt-5'>
						Ваш пушистый друг может стать иконой нашего сообщества, вдохновляя и радуя сердца тысяч любителей животных по всему миру!
						</p>
					</div>
        </div>

			</div>
			<div className='mt-[100px] lg:mt-[140px] h-[627px] dark:xl:bg-roadmap-stars flex justify-center items-center'>
				<div className='flex flex-col justify-center items-center text-center max-w-[1085px]'>
				<h2 className='font-sans font-medium text-[30px] xl:text-[34px] dark:text-white text-black-80'>
					Присоединяйтесь к уникальному сообществу любителей животных TailTalks!
				</h2>
				<p className='font-Rubic variable font-light text-[18px] xl:text-xl dark:text-[#F3F3F3] text-[#4D4D4D] mt-[20px]'>
					Не упусти шанс получить премиум-доступ к новой социальной сети для домашних животных
				</p>
				<ButtonBread name='Предварительная регистрация' onClick={clickHandler} />
				</div>
			</div>
		</div>
	);
};

export default PreRegistrationSection;