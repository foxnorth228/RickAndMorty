import { styled } from 'styled-components';

export const StyledPopupCharacter = styled.div`
  position: fixed;
  z-index: 3;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.65);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const StyledBlockContent = styled.div`
  position: relative;
  width: 100%;
  max-width: 360px;
  height: fit-content;
  background-color: white;
  padding: 0.5em;
`;

export const StyledImage = styled.img`
  width: 100%;
  max-width: 300px;
  height: 100%;
  max-height: 300px;
`;

export const StyledDescription = styled.p`
  font-size: 1.1em;
  margin: 0;
  padding: 0.4em 0.3em 0;
  word-wrap: break-word;
  &:last-child {
    padding-bottom: 0.4em;
  }
`;

export const StyledCross = styled.div`
  position: absolute;
  right: 0.5em;
  top: 0.5em;
  width: 32px;
  height: 32px;
  opacity: 0.3;
  transition: opacity 0.2s ease-out;
  &:hover {
    opacity: 1;
    cursor: pointer;
  }
  &:before,
  &:after {
    position: absolute;
    left: 15px;
    content: ' ';
    height: 33px;
    width: 2px;
    background-color: #333;
  }
  &:before {
    transform: rotate(45deg);
  }
  &:after {
    transform: rotate(-45deg);
  }
`;
