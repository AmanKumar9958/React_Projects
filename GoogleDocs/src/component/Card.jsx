import React from 'react'

const Card = () => {
    return (
        <div className='w-60 min-h-72 bg-zinc-900/90 rounded-[20px] relative overflow-hidden'>
            <div className="top"></div>
            <div className="mid"></div>
            <div className="bottom h-6 w-full bg-green-600 absolute top-full"></div>
        </div>
    )
}

export default Card