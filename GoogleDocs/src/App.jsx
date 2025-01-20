import React from 'react'
import Card from './component/Card'

const App = () => {
  return (
    <div className='w-full h-screen bg-zinc-800 relative'>
      <p className='absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] text-[13vw] leading-none tracking-tighter font-semibold text-zinc-900'>DOCS</p>
      <Card />
    </div>
  )
}

export default App