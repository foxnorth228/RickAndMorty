import React from 'react';
import { ICharacterCommon } from '@services/rickAndMorty/queries/characters/types';
import {
  StyledCardCharacter,
  StyledDescription,
  StyledImage,
} from '@components/CardCharacter/styled';

const CardCharacter = ({ name, gender, status, image }: ICharacterCommon) => {
  return (
    <StyledCardCharacter>
      <StyledImage src={image} alt={name} width={300} height={300} />
      <StyledDescription>Name: {name}</StyledDescription>
      <StyledDescription>Gender: {gender}</StyledDescription>
      <StyledDescription>Status: {status}</StyledDescription>
    </StyledCardCharacter>
  );
};

export default CardCharacter;
