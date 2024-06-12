// It would be a good idea to also upload a preview here, but oh well

import React, { useState } from 'react'
import Modal from 'react-modal'
import PreRegistration from '../components/PreRegistration/PreRegistration'
import { useTheme } from '../context/ThemeContext'

// import sections
import MissionSection from '../components/Main/MissionSection/MissionSection'
import HowItWorksSection from '../components/Main/HowItWorksSection/HowItWorksSection'
import CommunitySection from '../components/Main/CommunitySection/CommunitySection'
import CounterSection from '../components/Main/CounterSection/CounterSection'
import RoadMapSection from '../components/Main/RoadMapSection/RoadMapSection'
import NFTSection from '../components/Main/NFTSection/NFTSection'
import GoalsSection from '../components/Main/GoalsSection/GoalsSection'
import NewsSection from '../components/Main/NewsSection/NewsSection'
import FAQSection from '../components/Main/FAQSection/FAQSection'
import PreRegistrationSection from '../components/Main/PreRegistrationSection/PreRegistrationSection'

Modal.setAppElement('#root')


export default function Main() {

  const [preRegistration, setPreRegistration] = useState(false)
  const { theme } = useTheme()

  const openPreRegistration = () => {
    setPreRegistration(true)
  }

  const closePreRegistration = () => {
    setPreRegistration(false)
  }

  return (
    <main>
      <div className='container mx-auto px-4 3xl:px-10 flex-col'>
        <MissionSection />
      </div>
      <HowItWorksSection theme={theme} />
      <div className='container mx-auto px-4 3xl:px-10 flex-col'>
        <CommunitySection />
      </div>
      <CounterSection clickHandler={openPreRegistration} />
      <RoadMapSection theme={theme} />

      <div className='container mx-auto px-4 3xl:px-10'>
        <NFTSection />
        <NewsSection />
        <GoalsSection />
        <FAQSection />
      </div>
      <PreRegistrationSection clickHandler={openPreRegistration} />


      <Modal className='bg-slate-200/50 w-full h-full flex justify-center items-center' isOpen={preRegistration} onRequestClose={closePreRegistration}>
        <PreRegistration closeModal={closePreRegistration} />
      </Modal>
    </main>
  )
}
