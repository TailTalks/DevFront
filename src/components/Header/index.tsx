import React from 'react'
import { useTheme } from '../../context/ThemeContext'
import ThemeSwitchLight from '../../assets/ThemeSwitchLight.svg'
import ThemeSwitchDark from '../../assets/ThemeSwitchDark.svg'

export default function Header() {
  const { theme, toggleTheme } = useTheme() //for example, as a theme switch and then a navbar
  return (
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
  )
}
