from http.client import responses

import streamlit as st
import pickle
import requests

def fetch_poster(movie_id):
    response = requests.get('https://api.themoviedb.org/3/movie/{}?api_key=6d982f083664841e92105deb4f1d9b09&language=en-US'.format(movie_id))
    data = response.json()
    url = 'https://image.tmdb.org/t/p/w500/' + data['poster_path']
    return url


def recommend(movie):
    # First, find that movie index
    movie_index = movie_df[movie_df['title'] == movie].index[0]
    # Second, take similarity array(from similarity matrix) of that movie with all others
    distance = similarity[movie_index]
    # Third, bring out 5 most similar movies
    movie_5_list = sorted(list(enumerate(distance)), reverse=True, key = lambda x:x[1])[1:6]

    recommended_movie = []
    recommended_movie_poster = []
    # Print the given Movie names
    for i in movie_5_list:
        # print(i[0])
        movie_id = i[0]
        # st.write(movie_id)
        # st.write(movie_df.iloc[movie_id]["id"])
        recommended_movie.append(movie_df.iloc[movie_id]["title"])
        recommended_movie_poster.append( fetch_poster(movie_df.iloc[movie_id]["id"]) )

    # fetch_poster(19995)
    return recommended_movie ,recommended_movie_poster


st.title("Movie Recommendation System")

# Import/Take movie list and put it in select-box
movie_df = pickle.load(open("movies.pkl",'rb'))
movie_list = movie_df["title"].values

# Select-box
selected_movie = st.selectbox("What movie would you like to see:",movie_list)


# Import/Take similarity matrix
similarity = pickle.load(open("similarity.pkl",'rb'))


# Create button to Recommend movies
if st.button("Recommend"):

    recommend_movies,recommend_movies_poster = recommend(selected_movie)

    col1,col2,col3,col4,col5 = st.columns(5)

    with col1:
        st.text(recommend_movies[0])
        st.image(recommend_movies_poster[0])

    with col2:
        st.text(recommend_movies[1])
        st.image(recommend_movies_poster[1])

    with col3:
        st.text(recommend_movies[2])
        st.image(recommend_movies_poster[2])

    with col4:
        st.text(recommend_movies[3])
        st.image(recommend_movies_poster[3])

    with col5:
        st.text(recommend_movies[4])
        st.image(recommend_movies_poster[4])

