import React from 'react'
import ButtonBread from '../UI/ButtonBread'
//SVG
import vk from '../../assets/svg/footer/vk.svg'
import medium from '../../assets/svg/footer/medium.svg'
import dzen from '../../assets/svg/footer/dzen.svg'
import vcru from '../../assets/svg/footer/vcru.svg'
import telegram from '../../assets/svg/footer/telegram.svg'

export default function Footer() {
  return (
    <footer id='footer' className='mt-[50px] pb-[50px]'>
      <div className='container flex flex-col mx-auto'>
        <div className='py-[45px] border-y-[1px] border-white/20'>
          <div className='flex justify-between'>
            <h4 className='font-sans font-bold text-3xl text-gradient'>Tail Talks</h4>
            <div className='flex gap-6'>
              <a href="#" className='font-Rubik dark:text-white font-medium'>Наша миссия</a>
              <a href="#" className='font-Rubik dark:text-white font-medium'>Принцип работы</a>
              <a href="#" className='font-Rubik dark:text-white font-medium'>Дорожная карта</a>
              <a href="#" className='font-Rubik dark:text-white font-medium'>Сообщество</a>
              <a href="#" className='font-Rubik dark:text-white font-medium'>FAQ</a>
            </div>
            <div className='flex gap-6'>
              <a href="">
                <img src={vk} alt="Vk" />
              </a>
              <a href="">
                <img src={medium} alt="Medium" />
              </a>
              <a href="">
                <img src={dzen} alt="Yandex Zen" />
              </a>
              <a href="">
                <img src={vcru} alt="VC.ru" />
              </a>
              <a href="">
                <img src={telegram} alt="Telegram" />
              </a>
            </div>
          </div>
          <div className='flex justify-between mt-10'>
            <div className='flex flex-col gap-6'>
              <a href="" className='text-sm font-Rubik dark:text-white'>Безопасность данных Tail Talks</a>
              <a href="" className='text-sm font-Rubik dark:text-white'>Социальная ответственность</a>
              <a href="" className='text-sm font-Rubik dark:text-white'>Благотворительность</a>
            </div>
            <div className='flex flex-col gap-6 justify-end'>
              <h5 className='font-Rubik dark:text-white font-medium'>Свяжитесь с нами</h5>
              <p className='font-Rubik dark:text-white font-medium'>Email:<span className='font-light'> Tailtalks.official@gmail.com </span></p>
            </div>
            <div className='flex items-end'>
              <ButtonBread
                onClick={() => window.open('https://t.me/tailtalks_official', '_blank')} name='Сообщество Telegram'
                className='w-[21.563rem] h-[3rem] text-base lg:w-[18.938rem] lg:h-[2.813rem]' />
            </div>
          </div>
        </div>
        <div className='flex justify-between mt-[35px]'>
          <p className='font-Rubik dark:text-white dark:text-opacity-60 text-sm'>© 2024 Tail Talks. All Rights Reserved</p>
          <a href='#' className='font-Rubik dark:text-white dark:text-opacity-60 text-sm font-medium'>Privacy Policy</a>
        </div>
      </div>
    </footer>
  )
}
