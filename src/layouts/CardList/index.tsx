import CardCharacter from '@components/CardCharacter';
import { StyledCardList } from '@layouts/CardList/styled';
import { useStoreGetCharacters } from '@store/slices/characterSlice/hooks';
import React, { useEffect, useRef } from 'react';

const CardList = () => {
  const characters = useStoreGetCharacters();
  const handleScroll = () => {
    if((window.innerHeight + window.scrollY) >= document.documentElement.scrollHeight) {
      console.log('bottom');
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });
  return (
    <StyledCardList>
      {characters?.map((el) => <CardCharacter key={el.id} {...el} />)}
    </StyledCardList>
  );
};

export default CardList;
