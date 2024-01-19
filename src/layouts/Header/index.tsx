import Logo from '@assets/logo.svg';
import useGetCharacters from '@hooks/useGetCharacters';
import { useCharacters } from '@store/slices/characterSlice/hooks';
import React from 'react';

import { StyledHeader } from './styled';

const Header = () => {
  useGetCharacters();
  const characters = useCharacters();
  console.log(characters);

  return (
    <StyledHeader>
      <Logo style={{ width: '200px', marginTop: '38px', marginLeft: '48px' }} />
    </StyledHeader>
  );
};

export default Header;
