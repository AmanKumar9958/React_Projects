import React, { useState, useRef } from 'react';
import Navbar from './component/Navbar';
import Footer from './component/Footer';
import Timer from './component/Timer';
// import Text from './component/Text';
import InputBox from './component/InputBox';
import Result from './component/Result';

const wordsList = [
  'hello', 'world', 'this', 'is', 'a', 'test', 'for',
  'keyClash', 'typing', 'texting', 'example', 'coding',
  'typing', 'speed', 'keyboard', 'javascript', 'react',
  'project', 'clone', 'practice', 'text', 'words',
];

const App = () => {
  const [words, setWords] = useState(wordsList);
  const [time, setTime] = useState(60);
  const [showResult, setShowResult] = useState(false);
  const [showResultData, setShowResultData] = useState(null);
  const timeRef = useRef(null);
  const [timerStarted, setTimerStarted] = useState(false); // Timer control state

  const shuffleWords = (word) => word.sort(() => Math.random() - 0.5);

  const startTest = () => {
    setWords(shuffleWords([...wordsList]));
    setShowResult(false);
    setTimerStarted(false);
    setTime(60);
    clearInterval(timeRef.current);
  };

  const startTimer = () => {
    if (!timerStarted) {
      setTimerStarted(true); // Ensure the timer doesn't restart
      timeRef.current = setInterval(() => {
        setTime((prevTime) => {
          if (prevTime <= 1) {
            clearInterval(timeRef.current);
            handleComplete(0, 0, 0); // Pass appropriate values for completion
            return 0;
          }
          return prevTime - 1;
        });
      }, 1000);
    }
  };

  const handleComplete = (correct, incorrect, total) => {
    clearInterval(timeRef.current); // Stop the timer
    setShowResult(true);
    setShowResultData({ correct, incorrect, total, time });
  };

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100 flex flex-col">
      <Navbar />
      <div className="flex-grow flex flex-col items-center justify-center">
        <h1 className="text-4xl font-bold mb-8">Typing Test</h1>
        {!showResult ? (
          <div className="w-full max-w-3xl p-4 bg-gray-800 rounded-lg shadow-lg">
            <Timer time={time} />
            {/* <Text words={words} /> */}
            <InputBox
              words={words}
              onComplete={handleComplete}
              startTimer={startTimer}
              timeLeft={time}
            />
            <button
              onClick={startTest}
              className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-all w-fit m-auto flex justify-center"
            >
              Start Test
            </button>
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
