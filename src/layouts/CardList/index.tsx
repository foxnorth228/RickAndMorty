import React from 'react';
import CardCharacter from '@components/CardCharacter';
import { useStoreGetCharacters } from '@store/slices/characterSlice/hooks';
import { StyledCardList } from '@layouts/CardList/styled';

const CardList = () => {
  const characters = useStoreGetCharacters();
  return (
    <StyledCardList>
      {characters?.map((el) => <CardCharacter key={el.id} {...el} />)}
    </StyledCardList>
  );
};

export default CardList;
