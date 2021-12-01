import { GraphQLServer } from 'graphql-yoga';
import resolvers from './graphql/resolvers';

const server = new GraphQLServer({
  resolvers,
  typeDefs: 'graphql/schema.graphql',
});

server.start(() => {
  console.log('GraphQL server running..');
});
