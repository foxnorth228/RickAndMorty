import { styled } from 'styled-components';

export const StyledHeader = styled.header`
  width: 100%;
  min-height: 130px;
  background: linear-gradient(#13142d 0%, rgb(31, 32, 68) 100%);
  display: flex;
  grid-area: head;
  @media screen and (max-width: 600px) {
    position: sticky;
    top: 0;
    z-index: 2;
  }
`;
