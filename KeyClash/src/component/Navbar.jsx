import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faKeyboard } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
    return (
        <div className="w-4/5 h-16 bg-gray-800 text-white flex items-center justify-center m-auto rounded-2xl">
            <div className="flex items-center gap-5 justify-center">
                <FontAwesomeIcon icon={faKeyboard}  className='text-2xl'/>
                <h2 className='text-2xl'>KeyClash</h2>
            </div>
        </div>
    )
}

export default Navbar