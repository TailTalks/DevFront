import React, { useState } from 'react';
import '@fontsource-variable/rubik';
import './App.css'
import Modal from 'react-modal';
import PreRegistration from '../components/PreRegistration/PreRegistration';
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

Modal.setAppElement('#root');


function App() {

  const [theme, setTheme] = useState(true);
	const [preRegistration, setPreRegistration] = useState(false);

	const openPreRegistration = () => {
		setPreRegistration(true);
	};
	
	const closePreRegistration = () => {
		setPreRegistration(false);
	};

  const themeHandler = () => {
    setTheme(!theme)
    document.documentElement.classList.toggle("dark")
  }

  return (
    <div className='w-full h-96'>

      {/* container */}
      <div className='container mx-auto px-4 3xl:px-10 flex-col'>

        {/* header */}
        <div className='flex justify-between items-center h-14 mt-10 pt-2.5 pb-2.5'> 

          {/* logo */}
          <div className='flex h-9 justify-between items-center'>
            <div className='w-9 h-9 pr-5 mr-5 bg-[#000000] dark:bg-white rounded-full bg'></div>
            <div className='w-32 3xl:w-44 h-6 font-sans text-[#000000] dark:text-white 3xl:grow 3xl:text-4xl text-2xl font-bold'>Tail Talks</div>
          </div>
          {/* end logo */}

          {/* menu */}
          <div className='3xl:grow 3xl:px-96 3xl:text-3xl flex text-lg justify-between items-center w-[725px] h-7'>
            <a href="#mission"><button className='font-Rubik Variable text-[#000000] dark:text-white font-medium'>Наша миссия</button></a>
            <a href="#how_it_works"><button className='font-Rubik Variable text-[#000000] dark:text-white font-medium'>Принцип работы</button></a>
            <a href=""><button className='font-Rubik Variable text-[#000000] dark:text-white font-medium'>Дорожная карта</button></a>
            <a href=""><button className='font-Rubik Variable text-[#000000] dark:text-white font-medium'>Сообщество</button></a>
            <a href=""><button className='font-Rubik Variable text-[#000000] dark:text-white font-medium'>FAQ</button></a>
          </div>
          {/* end menu */}

          {/* language and theme */}
            <div className='flex justify-between items-center ml-10'>
              <select className='mr-5 bg-slate-300 font-Rubik Variable text-[#000000] dark:bg-black-50 dark:text-white text-base 3xl:text-xl font-medium rounded-md'>
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
        <div className='flex justify-between items-center w-full h-[515px] 3xl:h-[800px] mt-24 '> 

          <div className='flex flex-col justify-start w-[526px] h-80 2xl:grow 3xl:grow'>
            <div className='w-full h-32 font-sans text-[#000000] dark:text-white text-6xl font-semibold 3xl:text-7xl'>Социальная сеть Tail Talks</div>
            <div className='w-[498px] 3xl:w-auto h-14 mt-9 font-Rubik text-[#000000] dark:text-[#F3F3F3] text-xl 3xl:text-3xl font-light'>Место, где каждый питомец заслуживает быть звездой</div>
            <button className='w-80 h-16 3xl:w-96 3xl:h-24 mt-9 rounded-2xl font-sans text-black text-lg 3xl:text-2xl font-bold bg-gradient-to-bl from-[#FFAE4E] to-[#FF4C8C]'>Узнать подробнее</button>
          </div>
{/* 
          <div className='relative w-[600px] h-[515px]'>
            <img className='absolute top-0 right-24 cursor-pointer' src={Love} alt='Love'></img>
            <img className='absolute top-3 right-0 cursor-pointer' src={Share} alt='Share'></img>
            <img className='absolute top-28 right-1.5 cursor-pointer' src={Play} alt='Play'></img>
            <img className='absolute top-52 right-5 cursor-pointer' src={Maps} alt='Maps'></img>
          </div> */}

          <img className='relative w-[435px] h-[375px] 3xl:w-[900px] 3xl:h-[715px] xl:w-[600px] xl:h-[515px] 2xl:grow' src={theme ? illustrationDark : illustrationLight} alt='illustration'></img>

        </div>
        {/* end main */}

        {/* mission */}
        <div id='mission' className='flex justify-between w-full h-[355px] 3xl:h-[550px] mt-36'>
          <div className='w-1/2 2xl:grow 3xl:pr-96'>
            <div className='w-[380px] 3xl:w-auto h-16 font-sans text-[#000000] dark:text-white text-5xl 3xl:text-7xl font-medium'>Наша миссия</div>
            <div className='w-full mt-7 3xl:mt-9 font-Rubik text-[#000000] dark:text-[#F3F3F3] text-xl 3xl:text-4xl font-light'>Это не просто социальная сеть, это место, где каждый питомец становится звездой, а каждый владелец находит друга.</div>
            <div className='w-full mt-7 3xl:mt-9 font-Rubik text-[#000000] dark:text-[#F3F3F3] text-xl 3xl:text-4xl font-light'>Мы стремимся к созданию комьюнити, где общение между питомцами и их владельцами происходит естественно и радостно, 
              способствуя социальному развитию и благополучию любителей домашних животных.
            </div>
          </div>
          <div className='w-1/2'>
						<img className='w-[590px] h-[350px] 3xl:w-[900px] 3xl:h-[515px] rounded-2xl' src={MissionCat} alt='MissionCat' />
					</div>

        </div>
        {/* end mission */}

				{/* end container	 */}
				</div>

				{/* how it works */}

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

				{/* end how it works */}

				<div className='container mx-auto px-4 3xl:px-10 flex-col'>

				{/*TailTalks in telegram */}

				<div className='mt-[140px] flex justify-between text-center gap-x-12'>
					<div className='2xl:grow flex flex-col justify-between w-1/2 min-w-[448px] xl:min-w-[590px] relative'>
						<div className='xl:pr-16 3xl:w-[790px]'>
							<h3 className='font-sans font-semibold dark:text-white text-2xl xl:text-[26px] 3xl:text-4xl text-black-50 mt-[72px]'>
								Станьте частью уникального сообщества любителей животных Tail Talks!
							</h3>
							<p className='dark:text-[#F3F3F3F2] font-light font-Rubik Variable text-lg xl:text-xl 3xl:text-3xl leading-[26px] pt-4 3xl:mt-10 text-[#4D4D4D]'>
								Не упусти шанс получить премиум-доступ к новой социальной сети для домашних животных.
							</p>
						</div>
						<img src={telegramLabel} alt="" className='absolute w-[52px] h-[52px] xl:w-[99px] xl:h-[99px] left-[-25px] bottom-[235px] xl:left-[-36px] xl:bottom-[280px] 3xl:bottom-[430px]'/>
						<img src={telegramCat} alt="" className='rounded-2xl w-[448px] h-[270px] xl:w-[590px] xl:h-[350px] 3xl:w-[790px] 3xl:h-[500px] 3xl:mt-10'/>
					</div>
					<div className='2xl:grow flex flex-col justify-between items-center w-1/2 min-w-[448px] xl:min-w-[590px] relative'>
							<img src={telegramDog} alt="" className='rounded-2xl w-[448px] h-[270px] xl:w-[590px] xl:h-[350px] 3xl:w-[790px] 3xl:h-[500px] 3xl:mb-10'/>
							<img src={notesLabel} alt="" className='absolute w-[52px] h-[52px] xl:w-[99px] xl:h-[99px] right-[-10px] 2xl:right-[30px] 3xl:right-[180px] 4xl:right-[340px] top-[-20px] xl:top-[-36px]'/>
							<div className='3xl:w-[790px]'>
								<h3 className='font-sans font-semibold dark:text-white text-2xl xl:text-[26px] 3xl:text-4xl text-black-50 mt-20'>
									Сообщество Tail Talks в Telegram
								</h3>
								<p className=' dark:text-[#F3F3F3F2] font-light font-Rubik Variable text-lg xl:text-xl 3xl:text-3xl leading-[26px] pt-4 text-[#4D4D4D]'>
								Подключайтесь к нашему Telegram-сообществу, чтобы вместе создавать лучшее место для общения любителей животных. Ваши идеи помогут нам расти и развиваться!
								</p>
								<a href="https://t.me/tailtalkstg" target='_blank'>
									<button className='font-sans font-bold text-lg 3xl:text-2xl w-96 h-16 3xl:w-96 3xl:h-24 rounded-2xl bg-orangeGradient mt-10'>
										Сообщество Telegram
									</button>
								</a>
							</div>
					</div>
				</div>

				{/*end TailTalks in telegram */}
				</div>
      {/* end container */}

				{/*registation*/}

				<div className='xl:container mx-auto h-[570px] xl:h-[770px] bg-[#F3F3F3] xl:rounded-3xl bg-counterDog bg-contain bg-left bg-no-repeat mt-[100px] xl:mt-[140px] flex justify-end 3xl:justify-center'>
					<div className='w-[530px] xl:w-[670px] h-[500px] flex flex-col items-center mt-[70px] xl:mt-[134px] mb-[136px] mr-[90px] xl:mr-[110px]'>
						<h3 className='font-sans text-[#000000] text-2xl xl:text-[34px] text-center leading-[36px] xl:leading-[50px] font-medium'>
						Отсчет времени до запуска нашей социальной сети 
						<span className='bg-clip-text text-transparent bg-orangeGradient'> Tail Talks </span> начался!
						</h3>
						<p className='font-Rubik Variable font-light text-lg xl:text-xl text-[#717171] mt-[25px] text-center xl:px-10'>
						Наше приложение находится в стадии активной разработки, и мы прилагаем все усилия, чтобы предоставить вам и вашим пушистым (и не только) друзьям лучший опыт общения
						</p>
						<div className='flex mt-9'>
							<div className='flex flex-col justify-center items-center border-r border-[black]/20 px-10'>
								<span className='font-Rubik Variable font-semibold italic text-[55px] xl:text-[70px]'>133</span>
								<span className='font-Rubik Variable font-light text-base'>дни</span>
							</div>
							<div className='flex flex-col justify-center items-center border-r border-[black]/20 px-10'>
								<span className='font-Rubik Variable font-semibold italic text-[55px] xl:text-[70px]'>01</span>
								<span className='font-Rubik Variable font-light text-base'>часы</span>
							</div>
							<div className='flex flex-col justify-center items-center border-r border-[black]/20 px-10'>
								<span className='font-Rubik Variable font-semibold italic text-[55px] xl:text-[70px]'>59</span>
								<span className='font-Rubik Variable font-light text-base'>минуты</span>
							</div>
							<div className='flex flex-col justify-center items-center px-10'>
								<span className='font-Rubik Variable font-semibold italic text-[55px] xl:text-[70px]'>23</span>
								<span className='font-Rubik Variable font-light text-base'>секунды</span>
							</div>
						</div>
						<button onClick={openPreRegistration} className='font-sans font-bold text-lg w-96 h-16 rounded-2xl bg-orangeGradient mt-10'>
							Предварительная регистрация
						</button>
					</div>
				</div>

				<Modal className='bg-slate-200/50 w-full h-full flex justify-center items-center' isOpen={preRegistration} onRequestClose={closePreRegistration}>
					<PreRegistration closeModal={closePreRegistration} />
				</Modal>
				

				{/*end registration*/}
			{/* container */}
			<div>

      </div>
      {/* end container */}

    </div>
  );
}

export default App;
