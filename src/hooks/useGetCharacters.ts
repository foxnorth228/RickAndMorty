import { useApiGetAllCharacters } from '@services/rickAndMorty/hooks';
import { useStoreSetCharacters } from '@store/slices/characterSlice/hooks';
import { useEffect, useState } from 'react';
import { useStoreGetFilter } from '@store/slices/filterSlice/hooks';

const useGetCharacters = () => {
  const filter = useStoreGetFilter();
  const [oldFilter, setOldFilter] = useState('');
  const setCharacters = useStoreSetCharacters();
  const { loading, error, data } = useApiGetAllCharacters({
    variables: {
      ...filter,
    },
    skip: oldFilter === JSON.stringify(filter),
  });

  useEffect(() => {
    if (loading) {
      console.log('Loading...');
    }
    if (data) {
      console.log(data);
      setCharacters(data.characters.results);
      const str = JSON.stringify(filter);
      if (oldFilter !== str) {
        setOldFilter(str);
      }
    }
    if (error) {
      console.error(error);
    }
  }, [data, error, filter, loading, oldFilter, setCharacters]);
};

export default useGetCharacters;
