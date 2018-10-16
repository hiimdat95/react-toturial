import React from 'react';
import ReactDOM from 'react-dom';
import { createHttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { ApolloProvider } from 'react-apollo';
import ApolloClient from 'apollo-client';
import * as serviceWorker from './serviceWorker';
import Routes from './routes';


const httpLink = createHttpLink({ uri: 'http://localhost:8081/graphql' });
const cache = new InMemoryCache();

const client = new ApolloClient({
  cache,
  link: httpLink,
});
const App = (
  <ApolloProvider client={client}>
    <Routes />
  </ApolloProvider>
);
ReactDOM.render(App, document.getElementById('root'));

serviceWorker.unregister();
