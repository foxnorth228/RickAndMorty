import CardCharacter from '@components/CardCharacter';
import { StyledCardList } from '@layouts/CardList/styled';
import { useStoreGetCharacters } from '@store/slices/characterSlice/hooks';
import React from 'react';

const CardList = () => {
  const characters = useStoreGetCharacters();
  return (
    <StyledCardList>
      {characters?.map((el) => <CardCharacter key={el.id} {...el} />)}
    </StyledCardList>
  );
};

export default CardList;
