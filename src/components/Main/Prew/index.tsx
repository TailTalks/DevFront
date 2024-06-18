import React from 'react'
import { useTheme } from '../../../context/ThemeContext'
import illustrationDark from '../../../assets/IllustrationDark.svg'
import illustrationLight from '../../../assets/IllustrationLight.svg'
import ButtonBread from '../../UI/ButtonBread'
// import Love from '../../../assets/Love.svg'
// import Share from '../../../assets/Share.svg'
// import Play from '../../../assets/Play.svg'
// import Maps from '../../../assets/Maps.svg'

export default function Prew() {
  const { theme } = useTheme() //for example, as a theme switch and then a navbar

  return (
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
  )
}
