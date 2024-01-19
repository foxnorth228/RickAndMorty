import Logo from '@assets/logo.svg';
import React from 'react';

import { StyledHeader } from './styled';

const Header = () => {
  return (
    <StyledHeader>
      <Logo style={{ width: '200px', marginTop: '38px', marginLeft: '48px' }} />
    </StyledHeader>
  );
};

export default Header;
