import { styled } from 'styled-components';

export const StyledFilterBlock = styled.section`
  background-color: #f5f6f8;
  border: 1px solid #d8d8d8;
  transition: transform 0.6s ease-in-out;
  @media screen and (max-width: 600px) {
    padding-top: 50px;
    width: 100%;
    z-index: 2;
    transform: translateX(-100%);
    top: 130px;
    height: 100vh;
  }
`;

export const StyledDivSticky = styled.div`
  position: sticky;
  top: 1rem;
  @media screen and (max-width: 600px) {
    position: static;
  }
`;
