// I suggest building the application without unnecessary ;
// don't forget to use shift + alt + f to adjust the code
import React from 'react'
import '@fontsource-variable/rubik'
import './App.css'
import Header from '../components/Header'
import Prew from '../components/Main/Prew'
import Main from '../pages/Main' // then we will need to create a router and pass it to the app

// type Props = {
//   onClick: () => void,
//   themeHandler: (event: React.FormEvent<HTMLFormElement>) => void
// }

function App() {
  // It’s better not to load the app with unnecessary logic and put everything that doesn’t need to be put into separate components
  return (
    <div className='w-full h-96 cursor-default'>
      <div className='container mx-auto px-4 3xl:px-10 flex-col'>
        <Header />
        <Prew />
      </div>
      <Main />
    </div> //It’s better to put it all in some kind of layout
  )
}

export default App
