const BASE_URL = "http://127.0.0.1:5000";

export const getMovies = async () => {
  const res = await fetch(`${BASE_URL}/movies`);
  return res.json();
};

export const getRecommendations = async (movie) => {
  const res = await fetch(`${BASE_URL}/recommend`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ movie })
  });

  return res.json();
};