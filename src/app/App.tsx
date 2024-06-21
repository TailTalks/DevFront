import React from 'react'
import '@fontsource-variable/rubik'
import Modal from 'react-modal'
import Header from '../components/Header'
import Main from '../pages/Main'

Modal.setAppElement('#root')

function App() {

  return (
    <div className='w-full h-96 cursor-default'>
      <Header />
      <Main />
    </div>
  )
}

export default App
