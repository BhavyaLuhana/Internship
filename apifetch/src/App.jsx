import { useState, useEffect } from "react";

export default function JokeFetcher() {
  const [joke, setJoke] = useState("");
  const [loading, setLoading] = useState(false);

  const fetchJoke = async () => {
    setLoading(true);
    try {
      const response = await fetch("https://official-joke-api.appspot.com/random_joke");
      const data = await response.json();
      setJoke(`${data.setup}`);
    } catch (error) {
      console.error("Error fetching joke:", error);
      setJoke("Failed to fetch joke. Try again!");
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchJoke(); // Fetch a joke on component mount
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-5">
      <div className="bg-white shadow-lg p-6 rounded-lg max-w-md w-full text-center">
        <h2 className="text-2xl font-semibold mb-4">Random Joke Generator</h2>
        <p className="text-lg text-gray-800 mb-4">{loading ? "Loading..." : joke}</p>
        <button
          onClick={fetchJoke}
          className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
          disabled={loading}
        >
          {loading ? "Fetching..." : "Get New Joke"}
        </button>
      </div>
    </div>
  );
}
