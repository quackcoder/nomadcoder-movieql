export let movies = [
  {
    id: 1,
    name: 'Movie1',
    score: 8
  },
  {
    id: 2,
    name: 'Movie2',
    score: 6
  },
  {
    id: 3,
    name: 'Movie3',
    score: 9
  },
  {
    id: 4,
    name: 'Movie4',
    score: 4
  }
];

export const getMovies = () => movies;

export const getById = id => {
  const filteredMovies = movies.filter(movie => movie.id === id);
  return filteredMovies[0];
};

export const deleteMovie = id => {
  const cleanedMovies = movies.filter(movie => movie.id !== id);

  if (movies.length > cleanedMovies.length) {
    movies = cleanedMovies;
    return true;
  }
  return false;
};

export const addMovie = (name, score) => {
  const newMovie = {
    id: movies.length + 1,
    name,
    score
  };
  movies.push(newMovie);
  return movies;
};
