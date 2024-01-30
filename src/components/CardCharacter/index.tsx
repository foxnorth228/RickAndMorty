import {
  StyledCardCharacter,
  StyledDescription,
  StyledDescriptionFallback,
  StyledImage,
  StyledImageFallback,
} from '@components/CardCharacter/styled';
import useContextSelectedCharacter from '@hooks/useContextSelectedCharacter';
import { ICharacterCommon } from '@services/rickAndMorty/queries/characters/types';
import React, { useCallback } from 'react';

const CardCharacter = ({ name, gender, status, image, id }: ICharacterCommon) => {
  const [, setSelectedCharacter] = useContextSelectedCharacter();
  const onSetSelectedCharacter = useCallback(() => {
    setSelectedCharacter(id);
  }, [id, setSelectedCharacter]);
  return (
    <>
      {id === -1 ? (
        <StyledCardCharacter>
          <StyledImageFallback />
          <StyledDescriptionFallback>{name}</StyledDescriptionFallback>
          <StyledDescriptionFallback>{gender}</StyledDescriptionFallback>
          <StyledDescriptionFallback>{status}</StyledDescriptionFallback>
        </StyledCardCharacter>
      ) : (
        <StyledCardCharacter onClick={onSetSelectedCharacter}>
          <StyledImage src={image} alt={name} width={300} height={300} />
          <StyledDescription>Name: {name}</StyledDescription>
          <StyledDescription>Gender: {gender}</StyledDescription>
          <StyledDescription>Status: {status}</StyledDescription>
        </StyledCardCharacter>
      )}
    </>
  );
};

export default CardCharacter;
