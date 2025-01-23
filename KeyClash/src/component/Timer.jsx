import React from 'react'
import { useState, useEffect } from 'react'

const Timer = ({time, onTimeEnd}) => {
    const [seconds, setSeconds] =  useState(time);

    useEffect(() => {
        if(seconds > 0){
            const timer = setTimeout(() => setSeconds(seconds -1), 1000);
            return () => clearTimeout(timer);
        }
        else{
            onTimeEnd();
        }
    }, [seconds, onTimeEnd])
    return (
        <div>
            <h2>Time left: {seconds}s</h2>
        </div>
    )
}

export default Timer