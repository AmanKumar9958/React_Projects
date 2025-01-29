import React from 'react';

const Result = ({ correct, incorrect, total, elapsedTime }) => {
  const timeInMinutes = elapsedTime / 60;
  const wordsTyped = correct / 5;
  const speed = (wordsTyped / timeInMinutes).toFixed(2);
  const accuracy = ((correct / total) * 100 || 0).toFixed(2);

  const reloadWindow = () => {
    window.location.reload(); // Reload the page
  };

  return (
    <div className="text-center">
      <div>
        <h1 className="text-3xl font-bold bg-blue-400 text-gray-900 rounded-lg w-fit m-auto p-3 mb-6">
          Results
        </h1>
      </div>
      <div className="flex flex-col gap-3 text-lg text-gray-300">
        <p>Speed: <span className="font-bold text-blue-400">{speed} WPM</span></p>
        <p>Accuracy: <span className="font-bold text-blue-400">{accuracy}%</span></p>
        <p>Total Characters: <span className="font-bold text-blue-400">{total}</span></p>
        <p>Correct Characters: <span className="font-bold text-blue-400">{correct}</span></p>
        <p>Incorrect Characters: <span className="font-bold text-blue-400">{incorrect}</span></p>
      </div>
      <div className="mt-6">
        <button
          onClick={reloadWindow}
          className="bg-blue-400 text-gray-900 px-6 py-2 rounded-lg text-lg font-bold hover:bg-blue-500 transition-colors"
        >
          Try Again
        </button>
      </div>
    </div>
  );
};

export default Result;