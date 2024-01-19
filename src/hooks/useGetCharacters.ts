import { useEffect } from 'react';
import { useQuery } from '@apollo/client';
import getAllCharacters from '@services/rickAndMorty/characters.graphql';
import { useSetCharacters } from '@store/slices/characterSlice/hooks';

const useGetCharacters = () => {
  const setCharacters = useSetCharacters();
  const { loading, error, data } = useQuery(getAllCharacters);

  useEffect(() => {
    if (loading) {
      console.log('Loading...');
    }
    if (data) {
      console.log(data);
      setCharacters(data.characters.results);
    }
    if (error) {
      console.error(error);
    }
  })
  return null;
};

export default useGetCharacters;
