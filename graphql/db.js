import Axios from 'axios';

const BASE_URL = 'https://yts.mx/api/v2';
const LIST_MOVIES_URL = `${BASE_URL}/list_movies.json`;
const MOVIE_DETAILS_URL = `${BASE_URL}/movie_details.json`;
const MOVIE_SUGGESTIONS_URL = `${BASE_URL}/movie_suggestions.json`;

const API = Axios.create({
  baseURL: BASE_URL
});

export const getMovies = async (limit, rating) => {
  const {
    data: {
      data: { movies }
    }
  } = await Axios.get(LIST_MOVIES_URL, {
    params: {
      limit,
      minimum_rating: rating
    }
  });
  return movies;
};

export const getMovie = async id => {
  const {
    data: {
      data: { movie }
    }
  } = await Axios.get(MOVIE_DETAILS_URL, {
    params: {
      movie_id: id
    }
  });
  return movie;
};

export const suggestionMovies = async id => {
  const {
    data: {
      data: { movies }
    }
  } = await Axios.get(MOVIE_SUGGESTIONS_URL, {
    params: {
      movie_id: id
    }
  });
  return movies;
};
