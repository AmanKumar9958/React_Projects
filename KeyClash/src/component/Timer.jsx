import React from "react";

const Timer = ({ time }) => {
    return (
        <div className="text-center mb-4">
        <h2>Time Left: {time}s</h2>
        </div>
    );
};

export default Timer;
