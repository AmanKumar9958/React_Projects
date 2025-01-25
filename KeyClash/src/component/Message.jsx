import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRedo } from '@fortawesome/free-solid-svg-icons';

const message = () => {
    return (
        <div className='w-fit m-auto mb-40 flex gap-4 flex-col'>
            <h1 className='text-lg'>Focus on <span className='bg-gray-700 pt-1 pb-1 pl-2 pr-2 rounded-lg'>input box</span> to start timer.</h1>
            <h1 className='text-lg'>Click on <span className='bg-gray-700 pt-1 pb-1 pl-2 pr-2 rounded-lg'><FontAwesomeIcon icon={faRedo} /></span> to shuffle the text.</h1>
        </div>
    )
}

export default message