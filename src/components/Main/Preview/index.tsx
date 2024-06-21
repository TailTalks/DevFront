import React from 'react'
import { useTheme } from '../../../context/ThemeContext'
import illustrationDark from '../../../assets/IllustrationDark.svg'
import illustrationLight from '../../../assets/IllustrationLight.svg'
import ButtonBread from '../../UI/ButtonBread'
// import Love from '../../../assets/Love.svg'
// import Share from '../../../assets/Share.svg'
// import Play from '../../../assets/Play.svg'
// import Maps from '../../../assets/Maps.svg'

export default function Preview() {
  const { theme } = useTheme()

  return (
    <section className='preview'>
      <div className='container mx-auto px-4 3xl:px-10'>
        <div className='flex justify-between items-center w-full h-[515px] 3xl:h-[800px] mt-24 '>

          <div className='flex flex-col justify-start w-[526px] h-80 2xl:grow 3xl:grow'>
            <div className='w-full h-32 font-sans text-[#000000] dark:text-white text-6xl font-semibold 3xl:text-7xl'>Социальная сеть Tail Talks</div>
            <div className='w-[498px] 3xl:w-auto h-14 mt-9 font-Rubik text-[#000000] dark:text-[#F3F3F3] text-xl 3xl:text-3xl font-light'>Место, где каждый питомец заслуживает быть звездой</div>
            <ButtonBread name='Узнать подробнее' />
          </div>

          <img
            className='relative w-[435px] h-[375px] 3xl:w-[900px] 3xl:h-[715px] xl:w-[600px] xl:h-[515px] 2xl:grow'
            src={theme ? illustrationDark : illustrationLight} alt='illustration'>
          </img>

        </div>
      </div>
    </section>
  )
}
