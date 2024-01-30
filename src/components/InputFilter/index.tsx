import { StyledInputFilter, StyledLabel } from '@components/InputFilter/styled';
import { IInputFilter } from '@components/InputFilter/types';
import useContextPage from '@hooks/useContextPage';
import { useStoreChangeFilter } from '@store/slices/filterSlice/hooks';
import React, { useCallback } from 'react';

const InputFilter = ({ filter: { key, value } }: IInputFilter) => {
  const [page, setPage] = useContextPage();
  const changeFilter = useStoreChangeFilter();

  const onChangeInput = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      if (page !== 1) {
        setPage(1);
      }
      window.scrollTo({ top: 0, left: 0 });
      changeFilter({ key, value: e.target.value });
    },
    [changeFilter, key, page, setPage]
  );
  return (
    <StyledLabel>
      {key}
      <StyledInputFilter value={value} onChange={onChangeInput} />
    </StyledLabel>
  );
};

export default InputFilter;
