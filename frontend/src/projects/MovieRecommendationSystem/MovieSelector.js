import React, { useEffect, useState } from "react";

import RecommendationList from "./components/RecommendationList";

import { getMovies, getRecommendations } from "./services/api";

// Main Orchestrator Component
function MovieSelector({ dark }) {

  const [movies, setMovies] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState("");
  const [recommendations, setRecommendations] = useState([]);

  useEffect(() => {
    getMovies().then(setMovies);
  }, []);

  const handleRecommend = async () => {
    const data = await getRecommendations(selectedMovie);
    setRecommendations(data);
  };

  return (
    

    <div className={`text-center p-8 rounded-lg ${dark ? "bg-gray-800 text-white" : "bg-white text-black"}`}>

      <h1 className="text-3xl font-bold mb-6">
        🎬 Movie Recommendation System
      </h1>

      
      {/* Input with suggestions */}
      <input
        list="movies"
        placeholder="Search or select a movie..."
        value={selectedMovie}
        onChange={(e) => setSelectedMovie(e.target.value)}
        className={`border p-2 rounded mr-2 w-[500px] ${
          dark ? "bg-gray-700 border-gray-600 text-white" : ""
        }`}
      />

      <datalist id="movies">
        {movies.map((movie, index) => (
          <option key={index} value={movie} />
        ))}
      </datalist>

      <button
        onClick={handleRecommend}
        className={`px-4 py-2 rounded bg-blue-500 text-white`}
      >
        Recommend
      </button>

      <RecommendationList movies={recommendations} dark={dark} />

    </div>
  );
}

export default MovieSelector;