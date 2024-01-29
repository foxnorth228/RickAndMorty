import { styled } from 'styled-components';

export const StyledCardList = styled.main`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  justify-items: center;
  margin: 16px;
  grid-column-gap: 0.9em;
  grid-row-gap: 1.6em;
    overflow-y: auto;
`;
