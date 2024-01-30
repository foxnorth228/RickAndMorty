import useContextPage from '@hooks/useContextPage';
import { useApiGetAllCharacters } from '@services/rickAndMorty/hooks';
import { useStoreSetCharacters } from '@store/slices/characterSlice/hooks';
import { useStoreGetFilter } from '@store/slices/filterSlice/hooks';
import { useEffect, useLayoutEffect, useState } from 'react';

const useGetAndPutCharactersIntoStore = () => {
  const filter = useStoreGetFilter();
  const [oldFilter, setOldFilter] = useState('');

  const setCharacters = useStoreSetCharacters();
  const [maxPage, setMaxPage] = useState(Number.MAX_SAFE_INTEGER);
  const [page] = useContextPage();
  const { loading, error, data } = useApiGetAllCharacters({
    variables: {
      ...filter,
      page,
    },
    //optimization not to call api every rerender
    skip: oldFilter === JSON.stringify(filter) || page > maxPage,
  });
  useLayoutEffect(() => {
    setOldFilter('');
  }, [page]);
  useEffect(() => {
    if (data) {
      setCharacters([data.characters.results, page]);
      setMaxPage(Number(data.characters.info.pages ?? 1));
      const str = JSON.stringify(filter);
      if (oldFilter !== str) {
        setOldFilter(str);
      }
    }
    if (error) {
      console.error(error);
    }
    //should not to add setCharacters. Redux hook makes useEffect rerender every time
  }, [data, error, filter, oldFilter, page]);
  return loading;
};

export default useGetAndPutCharactersIntoStore;
