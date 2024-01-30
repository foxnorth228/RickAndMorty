import { StyledInputFilter, StyledLabel } from '@components/InputFilter/styled';
import { IInputFilter } from '@components/InputFilter/types';
import useContextPage from '@hooks/useContextPage';
import { useStoreChangeFilter } from '@store/slices/filterSlice/hooks';
import React, { useCallback } from 'react';

const InputFilter = ({ filter: { key, value } }: IInputFilter) => {
  const [, setPage] = useContextPage();
  const changeFilter = useStoreChangeFilter();

  const onChangeInput = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      window.scrollTo({ top: 0, left: 0 });
      setPage(1);
      changeFilter({ key, value: e.target.value });
    },
    [changeFilter, key, setPage]
  );
  return (
    <StyledLabel>
      {key}
      <StyledInputFilter value={value} onChange={onChangeInput} />
    </StyledLabel>
  );
};

export default InputFilter;
