import React from 'react'

const Text = () => {
    const wordsList = [
        "example", "coding", "typing", "speed", "keyboard", 
        "javascript", "react", "project", "clone", "practice"
    ]
    return (
        <div>
            <p>{wordsList.join(' ')}</p>
        </div>
    )
}

export default Text