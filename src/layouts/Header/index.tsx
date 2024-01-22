import Logo from '@components/Logo';
import React from 'react';

import { StyledHeader } from './styled';

const Header = () => {
  return (
    <StyledHeader>
      <Logo />
    </StyledHeader>
  );
};

export default Header;
