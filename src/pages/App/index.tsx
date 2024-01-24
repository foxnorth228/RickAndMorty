import Header from '@layouts/Header';
import React, { useState } from 'react';

import GlobalStyle from './styled';
import CardList from '@layouts/CardList';
import useGetCharacters from '@hooks/useGetCharacters';
import FilterBlock from '@layouts/FilterBlock';
import ContextSelectedCharacter from '@src/contexts/ContextSelectedCharacter';
import PopupCharacter from '@layouts/PopupCharacter';

const App = () => {
  const [selectedCharacter, setSelectedCharacter] = useState(-1);
  useGetCharacters();
  return (
    <ContextSelectedCharacter.Provider value={[selectedCharacter, setSelectedCharacter]}>
      <div className="wrapper">
        <PopupCharacter />
        <GlobalStyle />
        <Header />
        <FilterBlock />
        <CardList />
      </div>
    </ContextSelectedCharacter.Provider>
  );
};

export default App;
