import { StyledInputFilter, StyledLabel } from '@components/InputFilter/styled';
import { IInputFilter } from '@components/InputFilter/types';
import { useStoreChangeFilter } from '@store/slices/filterSlice/hooks';
import React, { useCallback } from 'react';

const InputFilter = ({ filter: { key, value } }: IInputFilter) => {
  const changeFilter = useStoreChangeFilter();

  const onChangeInput = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      changeFilter({ key, value: e.target.value });
    },
    [changeFilter, key]
  );
  return (
    <StyledLabel>
      {key}
      <StyledInputFilter value={value} onChange={onChangeInput} />
    </StyledLabel>
  );
};

export default InputFilter;
