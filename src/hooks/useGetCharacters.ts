import { useApiGetAllCharacters } from '@services/rickAndMorty/hooks';
import { useStoreSetCharacters } from '@store/slices/characterSlice/hooks';
import { useStoreGetFilter } from '@store/slices/filterSlice/hooks';
import { useEffect, useLayoutEffect, useState } from 'react';
import useContextPage from '@hooks/useContextPage';

const useGetCharacters = () => {
  const filter = useStoreGetFilter();
  const [oldFilter, setOldFilter] = useState('');
  const setCharacters = useStoreSetCharacters();
  const [page] = useContextPage();
  const { error, data } = useApiGetAllCharacters({
    variables: {
      ...filter,
      page,
    },
    skip: oldFilter === JSON.stringify(filter),
  });
  useLayoutEffect(() => {
    setOldFilter('');
  }, [page]);
  useEffect(() => {
    if (data) {
      setCharacters([data.characters.results, page]);
      const str = JSON.stringify(filter);
      if (oldFilter !== str) {
        setOldFilter(str);
      }
    }
    if (error) {
      console.error(error);
    }
  }, [data, error, filter, oldFilter, page]);
};

export default useGetCharacters;
