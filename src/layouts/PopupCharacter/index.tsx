import useContextSelectedCharacter from '@hooks/useContextSelectedCharacter';
import { StyledBlockContent, StyledPopupCharacter } from '@layouts/PopupCharacter/styled';
import React, { useCallback } from 'react';
import useGetCharacterById from '@hooks/useGetCharacterById';

const PopupCharacter = () => {
  const [selectedCharacter, setSelectedCharacter] = useContextSelectedCharacter();
  useGetCharacterById(selectedCharacter);
  const resetSelectedCharacter = useCallback(
    () => {
    setSelectedCharacter(-1);
  }, [setSelectedCharacter]);
  return (
    <StyledPopupCharacter $id={selectedCharacter} onClick={resetSelectedCharacter}>
      <StyledBlockContent>

      </StyledBlockContent>
    </StyledPopupCharacter>
  );
};

export default PopupCharacter;
