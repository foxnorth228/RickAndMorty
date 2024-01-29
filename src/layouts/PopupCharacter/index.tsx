import useContextSelectedCharacter from '@hooks/useContextSelectedCharacter';
import useGetCharacterById from '@hooks/useGetCharacterById';
import getProcessedData from '@layouts/PopupCharacter/getProcessedData';
import {
  StyledBlockContent,
  StyledCross,
  StyledDescription,
  StyledImage,
  StyledPopupCharacter,
} from '@layouts/PopupCharacter/styled';
import { ICharacterLocation } from '@services/rickAndMorty/queries/characters/types';
import React, { useCallback } from 'react';

import config from './config';

const PopupCharacter = () => {
  const [selectedCharacter, setSelectedCharacter] = useContextSelectedCharacter();
  const data = useGetCharacterById(selectedCharacter);
  const resetSelectedCharacter = useCallback(() => {
    setSelectedCharacter(-1);
  }, [setSelectedCharacter]);
  return (
    <>
      {data && (
        <StyledPopupCharacter onClick={resetSelectedCharacter}>
          <StyledBlockContent
            onClick={(e) => {
              e.stopPropagation();
            }}
          >
            <StyledImage src={data.image}></StyledImage>
            <div>
              {config.textValues.map((el, i) =>
                typeof data[el[0]] === 'string' ? (
                  <StyledDescription key={i}>
                    {el[1] + getProcessedData(data[el[0]] as 'string')}
                  </StyledDescription>
                ) : (
                  config.locationTextValues.map((nextEl, i) => (
                    <StyledDescription key={i}>
                      {el[1] +
                        ' ' +
                        nextEl[1] +
                        getProcessedData((data[el[0]] as ICharacterLocation)[nextEl[0]])}
                    </StyledDescription>
                  ))
                )
              )}
            </div>
            <StyledCross onClick={resetSelectedCharacter} />
          </StyledBlockContent>
        </StyledPopupCharacter>
      )}
    </>
  );
};

export default PopupCharacter;
