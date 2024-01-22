import { ApolloProvider } from '@apollo/client';
import App from '@pages/App';
import ApolloRickAndMorty from '@services/rickAndMorty';
import { store } from '@store';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <ApolloProvider client={ApolloRickAndMorty}>
        <App />
      </ApolloProvider>
    </Provider>
  </React.StrictMode>
);
