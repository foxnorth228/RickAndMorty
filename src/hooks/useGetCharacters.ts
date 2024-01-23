import { useApiGetAllCharacters } from '@services/rickAndMorty/hooks';
import { useStoreSetCharacters } from '@store/slices/characterSlice/hooks';
import { useEffect } from 'react';
import { useStoreGetFilter } from '@store/slices/filterSlice/hooks';

const useGetCharacters = () => {
  const filter = useStoreGetFilter();
  const setCharacters = useStoreSetCharacters();
  const { loading, error, data } = useApiGetAllCharacters({
    variables: {
      ...filter,
    },
  });

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
