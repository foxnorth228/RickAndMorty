import useMatchMedia from '@hooks/useMatchMedia';
import CardList from '@layouts/CardList';
import FilterBlock from '@layouts/FilterBlock';
import Header from '@layouts/Header';
import PopupCharacter from '@layouts/PopupCharacter';
import ContextPage from '@src/contexts/ContextPage';
import ContextSelectedCharacter from '@src/contexts/ContextSelectedCharacter';
import React, { useState } from 'react';

import GlobalStyle from './styled';

const App = () => {
  const matches = useMatchMedia('screen and (max-width: 600px)');
  const [selectedCharacter, setSelectedCharacter] = useState(-1);
  const [selectedPage, setSelectedPage] = useState(1);
  console.log(selectedPage);
  return (
    <ContextSelectedCharacter.Provider value={[selectedCharacter, setSelectedCharacter]}>
      <ContextPage.Provider value={[selectedPage, setSelectedPage]}>
        <div className="wrapper">
          <PopupCharacter />
          <GlobalStyle />
          <Header />
          <FilterBlock matches={matches} style={{ position: matches ? 'fixed' : '' }} />
          <CardList />
        </div>
      </ContextPage.Provider>
    </ContextSelectedCharacter.Provider>
  );
};

export default App;
