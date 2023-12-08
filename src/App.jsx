import React from 'react'
import Navbar from './components/Navbar'
import Card from './components/Card'
import { QuoteProvider } from './context/QuoteContext'

const App = () => {
  return (
    <QuoteProvider>
<div className="container1">
    <Navbar/>
    <div className="container p-5">
      <Card/>
    </div>
   </div>


    </QuoteProvider>
   
  )
}

export default App
