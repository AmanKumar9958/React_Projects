import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRedo } from '@fortawesome/free-solid-svg-icons';

const Message = () => {
    return (
        <div className="w-fit m-auto mb-10 flex gap-4 flex-col text-center">
        <h1 className="text-lg text-gray-400">
            Focus on the{" "}
            <span className="bg-gray-700 px-3 py-1 rounded-lg font-mono text-blue-400">
            input box
            </span>{" "}
            to start the timer.
        </h1>
        <h1 className="text-lg text-gray-400">
            Click on{" "}
            <span className="bg-gray-700 px-3 py-1 rounded-lg font-mono text-blue-400">
            <FontAwesomeIcon icon={faRedo} />
            </span>{" "}
            to shuffle the text.
        </h1>
        </div>
    );
};

export default Message;