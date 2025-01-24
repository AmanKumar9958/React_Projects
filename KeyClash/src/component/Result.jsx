import React from 'react'

const Result = ({correct, incorrect, total, time}) => {
    const accuracy = ((correct / total) * 100 || 0).toFixed(2);
    const speed = ((correct / time) * 60 || 0).toFixed(2);
    return (
        <div className='text-center'>
            <h1 className="text-2xl font-bold">Results</h1>
            <p>Speed: {speed} WPM</p>
            <p>Accuracy: {accuracy}%</p>
            <p>Total Characters: {total}</p>
            <p>Correct Characters: {correct}</p>
            <p>Incorrect Characters: {incorrect}</p>
        </div>
    )
}

export default Result