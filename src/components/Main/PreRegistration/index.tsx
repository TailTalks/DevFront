import React, { useState } from 'react'
import { useTheme } from '../../../context/ThemeContext'
import ButtonBread from '../../UI/ButtonBread'
import PreRegistrationModal from '../../modals/PreRegistrationModal'
import dogWithToy1440 from '../../../assets/images/preRegistration/dog_with_toy_1440.jpg'
import dogWithToy1024 from '../../../assets/images/preRegistration/dog_with_toy_1024.jpg'

//SVG
import PRstar from '../../../assets/svg/preRegistration/PRstar.svg'
import PRstarBig from '../../../assets/svg/preRegistration/PRstarBig.svg'
import PRstarColor from '../../../assets/svg/preRegistration/PRstarColor.svg'
import PRstarHuge from '../../../assets/svg/preRegistration/PRstarHuge.svg'
import PRstarNight from '../../../assets/svg/preRegistration/PRstarNight.svg'
import PRstarU from '../../../assets/svg/preRegistration/PRstarU.svg'
import sunPlain from '../../../assets/svg/preRegistration/sunPlain.svg'
import sun from '../../../assets/svg/preRegistration/sun.svg'

export default function PreRegistration() {
	const [isModalOpen, setIsModalOpen] = useState(false)
	const { theme } = useTheme()

	const openModal = () => setIsModalOpen(true)
	const closeModal = () => setIsModalOpen(false)

	return (
		<section className='preRegistration'>
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
				<div className="container relative flex justify-center items-center h-full">
					<div className='flex flex-col justify-center items-center text-center max-w-[1085px]'>
						<h2 className='font-sans font-medium text-[30px] xl:text-[34px] dark:text-white text-black-80'>
							Присоединяйтесь к уникальному сообществу любителей животных TailTalks!
						</h2>
						<p className='font-Rubic variable font-light text-[18px] xl:text-xl dark:text-[#F3F3F3] text-[#4D4D4D] mt-[20px]'>
							Не упусти шанс получить премиум-доступ к новой социальной сети для домашних животных
						</p>
						<ButtonBread name='Предварительная регистрация' onClick={openModal} />
					</div>
					<img src={PRstar} alt='star' className='absolute hidden lg:block top-0 left-[30px] xl:top-0 xl:left-[60px]' />
					<img src={PRstarBig} alt='star' className='absolute hidden lg:block bottom-0 left-[200px] xl:bottom-[10%] xl:left-[200px]' />
					<img src={PRstarHuge} alt='star' className='absolute hidden lg:block right-0 top-[15%] xl:right-[50px] xl:top-[50%]' />
					<img src={PRstarColor} alt='star' className='absolute hidden lg:block left-0 top-[60%] xl:left-[20px]' />
					<img src={PRstarU} alt='star' className='absolute hidden lg:block top-[10%] left-[15%] xl:top-[15%] xl:left-[250px]' />
					{theme
						?
						<img src={PRstarNight} alt='star' className='absolute hidden lg:block top-[10%] right-[15%] xl:top-[10%] xl:right-[250px]' />
						:
						<>
							<img src={sunPlain} alt='sun' className='absolute hidden lg:block top-0 right-[40%] xl:top-0 xl:right-[43%]' />
							<img src={sun} alt='sun' className='absolute hidden lg:block bottom-0 right-0 xl:bottom-[10%] xl:right-[20%]' />
						</>}

				</div>
			</div>


			<PreRegistrationModal isOpen={isModalOpen} closeModal={closeModal} />
		</section>
	)
}
