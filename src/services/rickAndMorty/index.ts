import { ApolloClient, InMemoryCache } from '@apollo/client';

const ApolloRickAndMorty = new ApolloClient({
  uri: 'https://rickandmortyapi.com/graphql',
  cache: new InMemoryCache(),
});

export default ApolloRickAndMorty;
