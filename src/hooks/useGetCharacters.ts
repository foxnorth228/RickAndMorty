import { useApiGetAllCharacters } from '@services/rickAndMorty/hooks';
import { useStoreSetCharacters } from '@store/slices/characterSlice/hooks';
import { useEffect } from 'react';

const useGetCharacters = () => {
  const setCharacters = useStoreSetCharacters();
  const { loading, error, data } = useApiGetAllCharacters();

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
  });
};

export default useGetCharacters;
