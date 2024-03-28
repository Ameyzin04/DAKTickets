import { useState } from 'react'
 
import { Route, Routes} from 'react-router-dom'
import Header from './components/Header'
import Main from './components/Main'
import Footer from './components/Footer'

import './App.css'
import Home from './components/Home'

function App() {
  

  return (
    < div className='app'>
    
    
        <Main />
      <Footer />
    </div>
  )
}

export default App