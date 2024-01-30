import CardCharacter from '@components/CardCharacter';
import useContextPage from '@hooks/useContextPage';
import useGetAndPutCharactersIntoStore from '@hooks/useGetAndPutCharactersIntoStore';
import { StyledCardList } from '@layouts/CardList/styled';
import { useStoreGetCharacters } from '@store/slices/characterSlice/hooks';
import React, { useEffect } from 'react';

const CardList = () => {
  const isLoading = useGetAndPutCharactersIntoStore();
  const [page, setPage] = useContextPage();
  const characters = useStoreGetCharacters();
  const handleScroll = () => {
    if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight) {
      setPage(page + 1);
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
      {!isLoading && characters?.length === 0 && <h2>No one element was found</h2>}
      {characters.map((el) => (
        <CardCharacter key={el.id} {...el} />
      ))}
      {isLoading &&
        new Array(20)
          .fill(-1)
          .map((el, i) => (
            <CardCharacter
              key={i}
              name={'test'}
              status={'test'}
              gender={'test'}
              image={'test'}
              id={el}
            />
          ))}
    </StyledCardList>
  );
};

export default CardList;
