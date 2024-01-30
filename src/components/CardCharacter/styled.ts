import { css, styled } from 'styled-components';

const Skeleton = css`
  background: linear-gradient(
    to right,
    #e0e0e0 0%,
    #e0e0e0 35%,
    #f0f0f0 50%,
    #d8d8d8 50%,
    #d8d8d8 100%
  );
  background-size: 200% 100%;
  background-position-x: right;
  animation: skeleton 1.2s ease-out infinite;

  @keyframes skeleton {
    from {
      background-position-x: right;
    }
    to {
      background-position-x: left;
    }
  }
`;

export const StyledCardCharacter = styled.article`
  width: 100%;
  max-width: 300px;
  height: fit-content;
  background-color: rgb(244, 244, 244, 0.5);
  border: 1px solid #d8d8d8;
`;

export const StyledImage = styled.img`
  width: 100%;
  height: auto;
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

export const StyledImageFallback = styled.div`
  width: 298px;
  height: 298px;
  ${Skeleton};
`;

export const StyledDescriptionFallback = styled(StyledDescription)`
  padding: 0;
  margin: 0.4em 0.3em 0;
  color: transparent;
  ${Skeleton};
  &:last-child {
    padding: 0;
    margin-bottom: 0.4em;
  }
`;
