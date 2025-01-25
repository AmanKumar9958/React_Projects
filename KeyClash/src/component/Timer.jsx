import React from "react";

const Timer = ({ time }) => {
    return (
        <div className="text-center mb-4 bg-gray-600 w-fit m-auto p-2 rounded-lg font-semibold">
        <h2>Time Left: {time}s</h2>
        </div>
    );
};

export default Timer;
