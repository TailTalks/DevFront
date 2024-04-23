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

      </div>
      {/* end container */}

    </div>
  );
}

export default App;
