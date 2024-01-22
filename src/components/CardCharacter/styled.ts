import { styled } from 'styled-components';

export const StyledCardCharacter = styled.article`
  width: 300px;
  max-width: 300px;
  background-color: rgb(244, 244, 244, 0.5);
  border: 1px solid #d8d8d8;
`;

export const StyledImage = styled.img`
`;

export const StyledDescription = styled.p`
  font-family: 'Roboto', Arial, Helvetica, sans-serif;
  font-size: 1.1em;
  margin: 0;
  padding: 0.4em 0.3em 0;
  word-wrap: break-word;
  &:last-child {
    padding-bottom: 0.4em;
  }
`;
