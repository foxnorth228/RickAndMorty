import {
  StyledCardCharacter,
  StyledDescription,
  StyledImage,
} from '@components/CardCharacter/styled';
import useContextSelectedCharacter from '@hooks/useContextSelectedCharacter';
import { ICharacterCommon } from '@services/rickAndMorty/queries/characters/types';
import React from 'react';

const CardCharacter = ({ name, gender, status, image, id }: ICharacterCommon) => {
  const [, setSelectedCharacter] = useContextSelectedCharacter();
  return (
    <StyledCardCharacter onClick={() => setSelectedCharacter(id)}>
      <StyledImage src={image} alt={name} width={300} height={300} />
      <StyledDescription>Name: {name}</StyledDescription>
      <StyledDescription>Gender: {gender}</StyledDescription>
      <StyledDescription>Status: {status}</StyledDescription>
    </StyledCardCharacter>
  );
};

export default CardCharacter;
