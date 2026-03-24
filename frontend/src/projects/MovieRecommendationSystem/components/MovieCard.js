import React from "react";

function MovieCard({ title, poster, dark }) {

  return (
    <div className="w-40 shadow-lg rounded-lg overflow-hidden">

      <img
        src={poster}
        alt={title}
        className="w-full h-56 object-cover"
      />

      <div className="p-2 text-center">
        <p className="font-semibold">{title}</p>
      </div>

    </div>
  );
}

export default MovieCard;