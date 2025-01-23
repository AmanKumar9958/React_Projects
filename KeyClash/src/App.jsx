import React from 'react'
import Navbar from './component/Navbar'
import Timer from './component/Timer'
import Footer from './component/Footer'

const App = () => {

  return (
    <div className='w-full h-screen bg-slate-900 pt-4'>
      <Navbar />
      {/* <Timer /> */}
      <Footer />
    </div>
  )
}

export default App