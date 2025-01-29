import React, { useState } from "react";

const InputBox = ({ timeLeft, words, onComplete, startTimer }) => {
  const [userInput, setUserInput] = useState("");
  const [correctCharacters, setCorrectCharacters] = useState(0);
  const [incorrectCharacters, setIncorrectCharacters] = useState(0);
  const [currentWordIndex, setCurrentWordIndex] = useState(0);

  const handleInputChange = (e) => {
    const inputValue = e.target.value;
    setUserInput(inputValue);

    // Start the timer on the first key press
    if (inputValue.length === 1 && timeLeft > 0) {
      startTimer();
    }
  };

  const calculateCharacterCounts = (trimmedInput, currentWord) => {
    let correctChars = 0;
    let incorrectChars = 0;

    // Compare each character in the word
    for (let i = 0; i < currentWord.length; i++) {
      if (trimmedInput[i] === currentWord[i]) {
        correctChars++;
      } else if (i < trimmedInput.length) {
        incorrectChars++;
      }
    }

    // Add extra incorrect characters if the input is longer
    incorrectChars += Math.max(0, trimmedInput.length - currentWord.length);

    return { correctChars, incorrectChars };
  };

  const handleKeyDown = (e) => {
    if (e.key === " ") {
      e.preventDefault(); // Prevent default space behavior

      const trimmedInput = userInput.trim();
      const currentWord = words[currentWordIndex];

      if (trimmedInput.length > 0) {
        const { correctChars, incorrectChars } = calculateCharacterCounts(
          trimmedInput,
          currentWord
        );

        setCorrectCharacters((prev) => prev + correctChars);
        setIncorrectCharacters((prev) => prev + incorrectChars);
      }

      const isLastWord = currentWordIndex + 1 >= words.length;
      const finalCounts = trimmedInput.length > 0
        ? calculateCharacterCounts(trimmedInput, currentWord)
        : { correctChars: 0, incorrectChars: 0 };

      if (isLastWord || timeLeft === 0) {
        const totalChars = words.reduce((sum, word) => sum + word.length, 0);
        onComplete(
          correctCharacters + finalCounts.correctChars,
          incorrectCharacters + finalCounts.incorrectChars,
          totalChars
        );
      }

      setCurrentWordIndex((prev) => prev + 1);
      setUserInput("");
    }
  };

  return (
    <div className="w-full">
      <div className="text-xl mb-6 text-gray-300 font-mono">
        {words.map((word, index) => (
          <span
            key={index}
            className={index === currentWordIndex ? "text-blue-400" : "text-gray-300"}
          >
            {word}{" "}
          </span>
        ))}
      </div>
      <input
        type="text"
        value={userInput}
        onChange={handleInputChange}
        onKeyDown={handleKeyDown}
        disabled={timeLeft === 0}
        className="p-3 w-full bg-gray-700 text-white border border-gray-600 rounded-lg focus:outline-none focus:border-blue-400 transition-colors text-lg"
        placeholder="Start typing here..."
      />
    </div>
  );
};

export default InputBox;