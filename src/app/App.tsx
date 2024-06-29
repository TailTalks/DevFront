import React from 'react'
import '@fontsource-variable/rubik'
import Modal from 'react-modal'
import Header from '../components/Header'
import Main from '../pages/Main'
import Footer from '../components/Footer'

Modal.setAppElement('#root')

function App() {

  return (
    <div className='w-full h-96 cursor-default'>
      <Header />
      <Main />
      <Footer />
    </div>
  )
}

export default App
