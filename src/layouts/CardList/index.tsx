import CardCharacter from '@components/CardCharacter';
import useContextPage from '@hooks/useContextPage';
import useGetCharacters from '@hooks/useGetCharacters';
import { StyledCardList } from '@layouts/CardList/styled';
import { useStoreGetCharacters } from '@store/slices/characterSlice/hooks';
import React, { useEffect } from 'react';

const CardList = () => {
  useGetCharacters();
  const [page, setPage] = useContextPage();
  const characters = useStoreGetCharacters();
  const handleScroll = () => {
    if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight) {
      setPage(page + 1);
      console.log(page + 1);
    }
  };
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  });
  return (
    <StyledCardList>
      {characters?.map((el) => <CardCharacter key={el.id} {...el} />)}
    </StyledCardList>
  );
};

export default CardList;
