import InputFilter from '@components/InputFilter';
import { StyledDivSticky, StyledFilterBlock } from '@layouts/FilterBlock/styled';
import { useStoreGetFilter } from '@store/slices/filterSlice/hooks';
import { IFilter } from '@store/slices/filterSlice/types';
import React from 'react';

export const FilterBlock = ({ matches, style }: { matches: boolean; style: object }) => {
  const filter = useStoreGetFilter();
  return (
    <>
      {matches && (
        <>
          <input id="menu__toggle" type="checkbox" className="menu__toggle"></input>
          <label htmlFor="menu__toggle" className="menu__btn">
            <span></span>
          </label>
        </>
      )}
      <StyledFilterBlock style={style}>
        <StyledDivSticky>
          {Object.entries(filter).map((el, i) => (
            <InputFilter key={i} filter={{ key: el[0] as keyof IFilter, value: el[1] }} />
          ))}
        </StyledDivSticky>
      </StyledFilterBlock>
    </>
  );
};

export default FilterBlock;
