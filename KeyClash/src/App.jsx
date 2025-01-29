import React, { useState, useRef } from 'react';
import './index.css';
import Navbar from './component/Navbar';
import Footer from './component/Footer';
import Timer from './component/Timer';
import InputBox from './component/InputBox';
import Result from './component/Result';
import Message from './component/Message';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRedo } from '@fortawesome/free-solid-svg-icons';

const wordsList = [
  'hello', 'world', 'this', 'is', 'a', 'test', 'for',
  'keyClash', 'typing', 'texting', 'example', 'coding',
];

const App = () => {
  const [words, setWords] = useState(wordsList);
  const [time, setTime] = useState(25);
  const [showResult, setShowResult] = useState(false);
  const [showResultData, setShowResultData] = useState(null);
  const timeRef = useRef(null);
  const [timerStarted, setTimerStarted] = useState(false);
  const [startTime, setStartTime] = useState(null);

  const shuffleWords = (word) => word.sort(() => Math.random() - 0.5);

  const startTest = () => {
    setWords(shuffleWords([...wordsList]));
    setShowResult(false);
    setTimerStarted(false);
    setTime(25);
    setShowResultData(null);
    setStartTime(Date.now());
    clearInterval(timeRef.current);
  };

  const startTimer = () => {
    if (!timerStarted) {
      setTimerStarted(true);
      setStartTime(Date.now());
      timeRef.current = setInterval(() => {
        setTime((prevTime) => {
          if (prevTime <= 1) {
            clearInterval(timeRef.current);
            handleComplete(0, 0, 0); // Call handleComplete with default values
            return 0;
          }
          return prevTime - 1;
        });
      }, 1000);
    }
  };

  const handleComplete = (correct, incorrect, total) => {
    clearInterval(timeRef.current);
    const elapsedTime = Math.floor((Date.now() - startTime) / 1000);
    setShowResult(true);
    setShowResultData({ correct, incorrect, total, elapsedTime });
  };

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100 flex flex-col">
      <Navbar />
      <div className="flex-grow flex flex-col items-center justify-center p-6">
        <h1 className="text-3xl font-bold mb-8 text-blue-400">Enhance Your Typing Skills</h1>
        {!showResult ? (
          <div className="w-full max-w-3xl p-8 bg-gray-800 rounded-xl shadow-2xl flex flex-col gap-6">
            <Timer time={time} />
            <InputBox
              words={words}
              onComplete={handleComplete}
              startTimer={startTimer}
              timeLeft={time}
            />
            <Message />
            <div className="tooltip mt-4 w-fit m-auto flex justify-center items-center cursor-pointer">
              <button
                onClick={startTest}
                className="px-6 py-3 text-gray-900 rounded-lg bg-blue-400 hover:bg-blue-500 transition-all flex justify-center items-center w-fit m-auto cursor-pointer"
              >
                <FontAwesomeIcon icon={faRedo} className="text-xl" />
              </button>
              <span className="tooltiptext">Reload</span>
            </div>
          </div>
        ) : (
          <Result {...showResultData} />
        )}
      </div>
      <Footer />
    </div>
  );
};

export default App;