import React from 'react'
import { useTheme } from '../../context/ThemeContext'
import ThemeSwitchLight from '../../assets/svg/theme/ThemeSwitchLight.svg'
import ThemeSwitchDark from '../../assets/svg/theme/ThemeSwitchDark.svg'

export default function Navbar() {

  const { theme, toggleTheme } = useTheme()

  return (
    <>
      <div className='3xl:grow 3xl:px-96 3xl:text-3xl flex text-lg justify-between items-center w-[725px] h-7'>
        <a
          href="#mission"
          className='font-Rubik Variable text-[#000000] dark:text-white font-medium'>
          Наша миссия
        </a>
        <a
        href="#how_it_works"
        className='font-Rubik Variable text-[#000000] dark:text-white font-medium'>
          Принцип работы
          </a>
        <a
        href="#roadmap"
        className='font-Rubik Variable text-[#000000] dark:text-white font-medium'>
          Дорожная карта
          </a>
        <a
        href="#community"
        className='font-Rubik Variable text-[#000000] dark:text-white font-medium'>
          Сообщество
          </a>
        <a
        href=""
        className='font-Rubik Variable text-[#000000] dark:text-white font-medium'>
          FAQ
          </a>
      </div>

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
    </>
  )
}
