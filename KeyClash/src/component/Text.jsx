import React from 'react'

const Text = ({words}) => {
    return (
        <div className="bg-gray-700 p-4 rounded mb-4">
            <p className="text-white text-lg">{words.join(" ")}</p>
        </div>
    )
}

export default Text