import { styled } from 'styled-components';

export const StyledPopupCharacter = styled.div<{ $id: number }>`
  display: ${(props) => (props.$id === -1 ? 'none' : 'block')};
  position: fixed;
  z-index: 2;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.65);
`;

export const StyledBlockContent = styled.div`
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
