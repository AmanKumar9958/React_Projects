import React, { useState } from "react";

const InputBox = ({ timeLeft, words, onComplete, startTimer }) => {
    const [userInput, setUserInput] = useState("");
    const [correctCharacters, setCorrectCharacters] = useState(0);
    const [incorrectCharacters, setIncorrectCharacters] = useState(0);
    const [currentWordIndex, setCurrentWordIndex] = useState(0);

    const handleInputChange = (e) => {
        const inputValue = e.target.value.trim();
        setUserInput(inputValue);
        checkInput(inputValue);
        startTimer(); // Start the timer on first interaction
    };

    const checkInput = (inputValue) => {
        const currentWord = words[currentWordIndex];
        if (currentWord.startsWith(inputValue)) {
        setCorrectCharacters(inputValue.length);
        } else {
        setIncorrectCharacters(incorrectCharacters + 1);
        }
    };

    const handleKeyDown = (e) => {
        if (e.key === " " && userInput.trim() === words[currentWordIndex]) {
        setCurrentWordIndex(currentWordIndex + 1);
        setUserInput("");

        // End test if last word is reached
        if (currentWordIndex + 1 >= words.length) {
            onComplete(correctCharacters, incorrectCharacters, words.length);
        }
        }
    };

    return (
        <div>
        <div className="text-lg mb-4">{words.join(" ")}</div>
        <input
            type="text"
            value={userInput}
            onChange={handleInputChange}
            onKeyDown={handleKeyDown}
            disabled={timeLeft === 0}
            onFocus={startTimer}
            className="p-2 w-full bg-gray-700 text-white border border-gray-500 rounded"
        />
        </div>
    );
};

export default InputBox;
