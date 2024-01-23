import Header from '@layouts/Header';
import React from 'react';

import GlobalStyle from './styled';
import CardList from '@layouts/CardList';
import useGetCharacters from '@hooks/useGetCharacters';
import FilterBlock from '@layouts/FilterBlock';

const App = () => {
  useGetCharacters();
  return (
    <div className="wrapper">
      <GlobalStyle />
      <Header />
      <FilterBlock />
      <CardList />
    </div>
  );
};

export default App;
