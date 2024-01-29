import useGetCharacters from '@hooks/useGetCharacters';
import CardList from '@layouts/CardList';
import FilterBlock from '@layouts/FilterBlock';
import Header from '@layouts/Header';
import PopupCharacter from '@layouts/PopupCharacter';
import ContextSelectedCharacter from '@src/contexts/ContextSelectedCharacter';
import React, { useState } from 'react';

import GlobalStyle from './styled';

const App = () => {
  const [selectedCharacter, setSelectedCharacter] = useState(-1);
  useGetCharacters();
  return (
    <ContextSelectedCharacter.Provider value={[selectedCharacter, setSelectedCharacter]}>
      <div className="wrapper" >
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
