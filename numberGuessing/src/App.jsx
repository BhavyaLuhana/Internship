import { useState } from "react";

export default function NumberGuessingGame() {
  const [randomNumber] = useState(Math.floor(Math.random() * 100) + 1);
  const [guess, setGuess] = useState("");
  const [message, setMessage] = useState("Guess a number between 1 and 100");
  const [attempts, setAttempts] = useState(0);

  const checkGuess = () => {
    const userGuess = parseInt(guess);
    if (isNaN(userGuess)) {
      setMessage("Please enter a valid number.");
      return;
    }
    setAttempts(attempts + 1);
    if (userGuess < randomNumber) {
      setMessage("Too low! Try again.");
    } else if (userGuess > randomNumber) {
      setMessage("Too high! Try again.");
    } else {
      setMessage(`Correct! You guessed it in ${attempts + 1} attempts.`);
    }
    setGuess("");
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-5">
      <div className="bg-white shadow-lg p-6 rounded-lg max-w-md w-full text-center">
        <h2 className="text-2xl font-semibold mb-4">Number Guessing Game</h2>
        <p className="text-lg text-gray-800 mb-4">{message}</p>
        <input
          type="number"
          value={guess}
          onChange={(e) => setGuess(e.target.value)}
          className="w-full p-2 border rounded mb-2"
          placeholder="Enter your guess"
        />
        <button
          onClick={checkGuess}
          className="w-full px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
        >
          Submit Guess
        </button>
        <p className="mt-4 text-gray-600">Attempts: {attempts}</p>
      </div>
    </div>
  );
}
