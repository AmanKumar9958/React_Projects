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

      const trimmedInput = userInput.trim(); // Remove extra spaces
      const currentWord = words[currentWordIndex]; // Current word to compare

      if (trimmedInput.length > 0) {
        // Calculate correct and incorrect characters
        const { correctChars, incorrectChars } = calculateCharacterCounts(
          trimmedInput,
          currentWord
        );

        // Update state
        setCorrectCharacters((prev) => prev + correctChars);
        setIncorrectCharacters((prev) => prev + incorrectChars);
      }

      // Move to the next word
      setCurrentWordIndex((prev) => prev + 1);
      setUserInput("");

      // If all words are typed or time is up, call onComplete
      if (currentWordIndex + 1 >= words.length || timeLeft === 0) {
        const totalChars = words.reduce((sum, word) => sum + word.length, 0); // Total characters in the word list
        const finalCorrect = correctCharacters + (trimmedInput.length > 0 ? calculateCharacterCounts(trimmedInput, currentWord).correctChars : 0);
        const finalIncorrect = incorrectCharacters + (trimmedInput.length > 0 ? calculateCharacterCounts(trimmedInput, currentWord).incorrectChars : 0);

        onComplete(finalCorrect, finalIncorrect, totalChars);
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
        className="p-2 w-full bg-gray-700 text-white border border-gray-500 rounded"
      />
    </div>
  );
};

export default InputBox;
