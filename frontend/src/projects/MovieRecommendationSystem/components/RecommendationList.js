import React from "react";

import MovieCard from "./MovieCard";

function RecommendationList({ movies }) {

  if (!movies.length) return null;

  return (
    <div className="flex justify-center gap-6 mt-8 flex-wrap">

      {movies.map((movie, index) => (
        <MovieCard
          key={index}
          title={movie.title}
          poster={movie.poster}
        />
      ))}

    </div>
  );
}

export default RecommendationList;