import React, { useState } from 'react';
import '@fontsource-variable/rubik';
import ThemeSwitchLight from '../assets/ThemeSwitchLight.svg'
import ThemeSwitchDark from '../assets//ThemeSwitchDark.svg'
// import Love from '../assets/Love.svg'
// import Share from '../assets/Share.svg'
// import Play from '../assets/Play.svg'
// import Maps from '../assets/Maps.svg'

import illustrationDark from '../assets/IllustrationDark.svg'
import illustrationLight from '../assets/IllustrationLight.svg'
import MissionCat from '../assets/MissionCat.jpg'
import telegramCat from '../assets/telegramCat.jpg'
import telegramDog from '../assets/telegramDog.jpg'
import notesLabel from '../assets/notes.svg'
import telegramLabel from '../assets/telegram.svg'

// type Props = {
//   onClick: () => void,
//   themeHandler: (event: React.FormEvent<HTMLFormElement>) => void
// }

function App() {

  const [theme, setTheme] = useState(true);

  const themeHandler = () => {
    setTheme(!theme)
    document.documentElement.classList.toggle("dark")
  }

  return (
    <div className='w-full h-96'>

      {/* container */}
      <div className='container mx-auto px-4 w-[1220px] flex-col'>

        {/* header */}
        <div className='flex justify-between items-center h-14 mt-10 pt-2.5 pb-2.5'> 

          {/* logo */}
          <div className='flex h-9 justify-between items-center'>
            <div className='w-9 h-9 pr-5 mr-5 bg-[#000000] dark:bg-white rounded-full bg'></div>
            <div className='w-32 h-6 font-sans text-[#000000] dark:text-white text-2xl font-bold'>Tail Talks</div>
          </div>
          {/* end logo */}

          {/* menu */}
          <div className='flex justify-between items-center w-[725px] h-7'>
            <button className='font-Rubik Variable text-[#000000] dark:text-white text-lg font-medium'>Наша миссия</button>
            <button className='font-Rubik Variable text-[#000000] dark:text-white text-lg font-medium'>Принцип работы</button>
            <button className='font-Rubik Variable text-[#000000] dark:text-white text-lg font-medium'>Дорожная карта</button>
            <button className='font-Rubik Variable text-[#000000] dark:text-white text-lg font-medium'>Сообщество</button>
            <button className='font-Rubik Variable text-[#000000] dark:text-white text-lg font-medium'>FAQ</button>
          </div>
          {/* end menu */}

          {/* language and theme */}
            <div className='flex justify-between items-center ml-10'>
              <select className='mr-5 bg-slate-300 font-Rubik Variable text-[#000000] dark:bg-black-50 dark:text-white  text-md font-medium rounded-md'>
                <option className='text-[#000000] dark:text-white'>RU</option>
                <option className='text-[#000000] dark:text-white'>ENG</option>
                <option className='text-[#000000] dark:text-white'>CHT</option>
              </select>

              <img className='w-6 h-6 cursor-pointer' src={theme ? ThemeSwitchLight : ThemeSwitchDark} alt='theme' onClick={() => themeHandler()}></img>

            </div>
          {/* end language and theme */}



        </div>
        {/* end header */}

        {/* main */}
        <div className='flex justify-between items-center w-full h-[515px] mt-24 '> 

          <div className='flex flex-col justify-start w-[526px] h-80'>
            <div className='w-full h-32 font-sans text-[#000000] dark:text-white text-6xl font-semibold'>Социальная сеть Tail Talks</div>
            <div className='w-[498px] h-14 mt-9 font-Rubik text-[#000000] dark:text-[#F3F3F3] text-xl font-light'>Место, где каждый питомец заслуживает быть звездой</div>
            <button className='w-80 h-16 mt-9 rounded-2xl font-sans text-black text-lg font-bold bg-gradient-to-bl from-[#FFAE4E] to-[#FF4C8C]'>Узнать подробнее</button>
          </div>
{/* 
          <div className='relative w-[600px] h-[515px]'>
            <img className='absolute top-0 right-24 cursor-pointer' src={Love} alt='Love'></img>
            <img className='absolute top-3 right-0 cursor-pointer' src={Share} alt='Share'></img>
            <img className='absolute top-28 right-1.5 cursor-pointer' src={Play} alt='Play'></img>
            <img className='absolute top-52 right-5 cursor-pointer' src={Maps} alt='Maps'></img>
          </div> */}

          <img className='relative w-[600px] h-[515px]' src={theme ? illustrationDark : illustrationLight} alt='illustration'></img>

        </div>
        {/* end main */}

        {/* mission */}
        <div className='flex justify-between w-full h-[355px] mt-36'>
          <div className='w-[542px]'>
            <div className='w-[380px] h-16 font-sans text-[#000000] dark:text-white text-5xl font-medium'>Наша миссия</div>
            <div className='w-full mt-7 font-Rubik text-[#000000] dark:text-[#F3F3F3] text-xl font-light'>Это не просто социальная сеть, это место, где каждый питомец становится звездой, а каждый владелец находит друга.</div>
            <div className='w-full mt-7 font-Rubik text-[#000000] dark:text-[#F3F3F3] text-xl font-light'>Мы стремимся к созданию комьюнити, где общение между питомцами и их владельцами происходит естественно и радостно, 
              способствуя социальному развитию и благополучию любителей домашних животных.
            </div>
          </div>
          <img className='w-[590px] h-[350px] rounded-2xl' src={MissionCat} alt='MissionCat'></img>

        </div>
        {/* end mission */}


				{/* how it works */}

						<div className='w-full h-[568px] mt-36'>
							<div className='h-16 font-sans text-[#000000] dark:text-white text-5xl font-medium'>
								Как работает Tail Talks?
							</div>
							<div className='mt-[30px] flex'>
								<div className="w-96 min-w-96 h-[437px] bg-step-1 bg-center bg-cover flex flex-col justify-end">
									<div className='pl-10 pr-8 pb-12'>
										<h3 className='font-sans font-bold text-white text-[26px]'>
											Шаг 1
										</h3>
										<p className='text-[#F3F3F3F2] font-light font-Rubik Variable text-lg pt-4'>
											Загрузи фотографии своего питомца
										</p>
									</div>
								</div>
								<div className="w-96 min-w-96 h-[437px] bg-step-2 bg-center bg-cover flex flex-col justify-end">
									<div className='pl-10 pr-8 pb-12'>
										<h3 className='font-sans font-bold text-white text-[26px]'>
											Шаг 2
										</h3>
										<p className='text-[#F3F3F3F2] font-light font-Rubik Variable text-lg pt-4'>
										Делись публикациями со своими друзьями и собирай лайки
										</p>
									</div>
								</div>
								<div className="w-96 min-w-96 h-[437px] bg-step-3 bg-center bg-cover flex flex-col justify-end">
									<div className='pl-10 pr-8 pb-12'>
										<h3 className='font-sans font-bold text-white text-[26px]'>
											Шаг 3
										</h3>
										<p className='text-[#F3F3F3F2] font-light font-Rubik Variable text-lg pt-4'>
											Алгоритмы ИИ позволят легко преобразить фотографию питомца
										</p>
									</div>
								</div>
								<div className="w-96 min-w-96 h-[437px] bg-step-4 bg-center bg-cover flex flex-col justify-end">
									<div className='pl-10 pr-8 pb-12'>
										<h3 className='font-sans font-bold text-white text-[26px]'>
											Шаг 4
										</h3>
										<p className='text-[#F3F3F3F2] font-light font-Rubik Variable text-lg pt-4'>
										Алгоритмы ИИ продвинут фото вашего питомца
										</p>
									</div>
								</div>
								<div className="w-96 min-w-96 h-[437px] bg-step-5 bg-center bg-cover flex flex-col justify-end">
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

				{/* end how it works */}

				{/*TailTalks in telegram */}

				<div className='mt-[140px] flex justify-between h-[666px] text-center gap-x-12'>
					<div className='flex flex-col justify-between w-1/2 min-w-[590px] relative'>
						<div className='pr-16'>
							<h3 className='font-sans font-semibold dark:text-white text-[26px] text-black-50 mt-[72px]'>
								Станьте частью уникального сообщества любителей животных Tail Talks!
							</h3>
							<p className='dark:text-[#F3F3F3F2] font-light font-Rubik Variable text-[20px] leading-[26px] pt-4 text-[#4D4D4D]'>
								Не упусти шанс получить премиум-доступ к новой социальной сети для домашних животных.
							</p>
						</div>
						<img src={telegramLabel} alt="" className='absolute left-[-36px] bottom-[280px]'/>
						<img src={telegramCat} alt="" className='rounded-2xl w-[590px] h-[350px]'/>
					</div>
					<div className='flex flex-col justify-between w-1/2 min-w-[590px] relative'>
						<div>
							<img src={telegramDog} alt="" className='rounded-2xl w-[590px] h-[350px]'/>
							<img src={notesLabel} alt="" className='absolute right-[-36px] top-[-36px]'/>
							<h3 className='font-sans font-semibold dark:text-white text-[26px] text-black-50 mt-20'>
								Сообщество Tail Talks в Telegram
							</h3>
							<p className='w-[560px] dark:text-[#F3F3F3F2] font-light font-Rubik Variable text-[20px] leading-[26px] pt-4 text-[#4D4D4D]'>
							Подключайтесь к нашему Telegram-сообществу, чтобы вместе создавать лучшее место для общения любителей животных. Ваши идеи помогут нам расти и развиваться!
							</p>
							<a href="https://t.me/tailtalkstg" target='_blank'>
								<button className='font-sans font-bold text-lg w-96 h-16 rounded-2xl bg-orangeGradient mt-10'>
									Сообщество Telegram
								</button>
							</a>
						</div>
					</div>
				</div>

				{/*end TailTalks in telegram */}

				{/*registation*/}

				<div className='h-[770px] bg-[#F3F3F3] rounded-3xl bg-counterDog bg-left bg-no-repeat mt-[140px] mx-[-62px] flex justify-end'>
					<div className='w-[805px] h-[500px] flex flex-col items-center mt-[134px] mb-[136px] pr-[110px]'>
						<h3 className='font-sans text-[#000000] text-[34px] leading-[50px] font-medium'>
						Отсчет времени до запуска нашей социальной сети 
						<span className='bg-clip-text text-transparent bg-orangeGradient'> Tail Talks </span> начался!
						</h3>
						<p className='font-Rubik Variable font-light text-xl text-[#717171] mt-[25px] text-center px-10'>
						Наше приложение находится в стадии активной разработки, и мы прилагаем все усилия, чтобы предоставить вам и вашим пушистым (и не только) друзьям лучший опыт общения
						</p>
						<div className='flex mt-9'>
							<div className='flex flex-col justify-center items-center border-r border-[black]/20 px-10'>
								<span className='font-Rubik Variable font-semibold italic text-[70px]'>133</span>
								<span className='font-Rubik Variable font-light text-base'>дни</span>
							</div>
							<div className='flex flex-col justify-center items-center border-r border-[black]/20 px-10'>
								<span className='font-Rubik Variable font-semibold italic text-[70px]'>01</span>
								<span className='font-Rubik Variable font-light text-base'>часы</span>
							</div>
							<div className='flex flex-col justify-center items-center border-r border-[black]/20 px-10'>
								<span className='font-Rubik Variable font-semibold italic text-[70px]'>59</span>
								<span className='font-Rubik Variable font-light text-base'>минуты</span>
							</div>
							<div className='flex flex-col justify-center items-center px-10'>
								<span className='font-Rubik Variable font-semibold italic text-[70px]'>23</span>
								<span className='font-Rubik Variable font-light text-base'>секунды</span>
							</div>
						</div>
						<button className='font-sans font-bold text-lg w-96 h-16 rounded-2xl bg-orangeGradient mt-10'>
							Предварительная регистрация
						</button>
					</div>
				</div>

				{/*end registration*/}

      </div>
      {/* end container */}

    </div>
  );
}

export default App;
