import { getMovie, getMovies, suggestionMovies } from './db';

const resolvers = {
  Query: {
    movies: (_, { limit, rating }) => getMovies(limit, rating),
    movie: (_, { id }) => getMovie(id),
    suggestions: (_, { id }) => suggestionMovies(id)
  }
};

export default resolvers;
