import React from 'react'

const Timer = () => {
    return (
        <div className='w-2/5 bg-blue-900 text-white m-auto mt-5 rounded-lg flex items-center justify-center gap-5 p-5'>
            <h1>Timer: </h1>
            <div className='flex gap-5'>
                <button className='bg-blue-500 pt-2 pb-2 pl-3 pr-3 rounded-full font-bold'>15s</button>
                <button className='bg-blue-500 pt-2 pb-2 pl-3 pr-3 rounded-full font-bold'>30s</button>
                <button className='bg-blue-500 pt-2 pb-2 pl-3 pr-3 rounded-full font-bold'>60s</button>
                <button className='bg-blue-500 pt-2 pb-2 pl-3 pr-3 rounded-full font-bold'>120s</button>
            </div>
        </div>
    )
}

export default Timer