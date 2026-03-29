from flask import Blueprint, request, jsonify
import joblib
import requests

from dotenv import load_dotenv
import os
import gdown

FILE_ID = "1tlgTYyl2gAT4laPesLWab7Bk3LbJ-8nv"
URL = f"https://drive.google.com/uc?id={FILE_ID}"
OUTPUT = "similarity.pkl"

# Download only if not exists
if not os.path.exists(OUTPUT):
    print("Downloading similarity.pkl...")
    gdown.download(URL, OUTPUT, quiet=False)



load_dotenv()


movie_bp = Blueprint("movie", __name__)

movie_df = joblib.load("projects/MovieRecommendationSystem/movies.pkl")
similarity = joblib.load("similarity.pkl")

TMDB_API_KEY = os.getenv("TMDB_API_KEY")


def fetch_poster(movie_id):

    url = f"https://api.themoviedb.org/3/movie/{movie_id}?api_key={TMDB_API_KEY}&language=en-US"

    try:
        response = requests.get(url, timeout=10)
        data = response.json()

        poster_path = data.get("poster_path")

        if poster_path:
            return "https://image.tmdb.org/t/p/w500/" + poster_path
        else:
            return "https://via.placeholder.com/500x750?text=No+Poster"

    except:
        return "https://via.placeholder.com/500x750?text=Error"


def recommend(movie):

    movie_index = movie_df[movie_df["title"] == movie].index[0]
    distance = similarity[movie_index]

    movie_5_list = sorted(
        list(enumerate(distance)),
        reverse=True,
        key=lambda x: x[1]
    )[1:6]

    recommended_movies = []

    for i in movie_5_list:
        movie_id = i[0]

        title = movie_df.iloc[movie_id]["title"]
        poster = fetch_poster(movie_df.iloc[movie_id]["id"])

        recommended_movies.append({
            "title": title,
            "poster": poster
        })

    return recommended_movies


@movie_bp.route("/movies", methods=["GET"])
def get_movies():
    movies = movie_df["title"].tolist()
    return jsonify(movies)


@movie_bp.route("/recommend", methods=["POST"])
def recommend_movies():

    data = request.json
    movie = data["movie"]

    results = recommend(movie)

    return jsonify(results)
