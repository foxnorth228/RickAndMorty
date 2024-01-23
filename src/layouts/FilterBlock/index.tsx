import React from 'react';
import { StyledDivSticky, StyledFilterBlock } from '@layouts/FilterBlock/styled';
import { useStoreGetFilter } from '@store/slices/filterSlice/hooks';
import InputFilter from '@components/InputFilter';
import { IFilter } from '@store/slices/filterSlice/types';

export const FilterBlock = () => {
  const filter = useStoreGetFilter();
  return (
    <StyledFilterBlock>
      <StyledDivSticky>
        {Object.entries(filter).map((el, i) => (
          <InputFilter key={i} filter={{ key: el[0] as keyof IFilter, value: el[1] }} />
        ))}
      </StyledDivSticky>
    </StyledFilterBlock>
  );
};

export default FilterBlock;
