// I suggest building the application without unnecessary ;
// don't forget to use shift + alt + f to adjust the code
import React, { useState } from 'react'
import { useTheme } from '../context/ThemeContext'
import '@fontsource-variable/rubik'
import './App.css'
import ThemeSwitchLight from '../assets/ThemeSwitchLight.svg'
import ThemeSwitchDark from '../assets//ThemeSwitchDark.svg'
// import Love from '../assets/Love.svg'
// import Share from '../assets/Share.svg'
// import Play from '../assets/Play.svg'
// import Maps from '../assets/Maps.svg'
import illustrationDark from '../assets/IllustrationDark.svg'
import illustrationLight from '../assets/IllustrationLight.svg'
import ButtonBread from '../components/UI/ButtonBread'
import Main from '../pages/Main' // then we will need to create a router and pass it to the app


// type Props = {
//   onClick: () => void,
//   themeHandler: (event: React.FormEvent<HTMLFormElement>) => void
// }


function App() {
  // It’s better not to load the app with unnecessary logic and put everything that doesn’t need to be put into separate components
  const { theme, toggleTheme } = useTheme() //for example, as a theme switch and then a navbar

  return (
    <div className='w-full h-96 cursor-default'>

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
            <a href="#roadmap"><button className='font-Rubik Variable text-[#000000] dark:text-white font-medium'>Дорожная карта</button></a>
            <a href="#community"><button className='font-Rubik Variable text-[#000000] dark:text-white font-medium'>Сообщество</button></a>
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

            <img
              className='w-6 h-6 cursor-pointer'
              src={theme ? ThemeSwitchLight : ThemeSwitchDark}
              alt='theme'
              onClick={toggleTheme}>
            </img>

          </div>
          {/* end language and theme */}

        </div>
        {/* end header */}

        {/* prewiew */}
        <div className='flex justify-between items-center w-full h-[515px] 3xl:h-[800px] mt-24 '>

          <div className='flex flex-col justify-start w-[526px] h-80 2xl:grow 3xl:grow'>
            <div className='w-full h-32 font-sans text-[#000000] dark:text-white text-6xl font-semibold 3xl:text-7xl'>Социальная сеть Tail Talks</div>
            <div className='w-[498px] 3xl:w-auto h-14 mt-9 font-Rubik text-[#000000] dark:text-[#F3F3F3] text-xl 3xl:text-3xl font-light'>Место, где каждый питомец заслуживает быть звездой</div>
            <ButtonBread name='Узнать подробнее' />
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
        {/* end preview */}


        {/* end container	 */}
      </div>
      <Main />


    </div>
  )
}

export default App
