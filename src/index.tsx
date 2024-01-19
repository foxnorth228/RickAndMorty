import App from '@pages/App';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from '@store';
import { ApolloProvider } from '@apollo/client';
import ApolloRickAndMorty from '@services/rickAndMorty';

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
