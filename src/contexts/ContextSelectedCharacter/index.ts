import { createContext } from 'react';

import { IContextSelectedCharacter } from './types';

const ContextSelectedCharacter = createContext<IContextSelectedCharacter>([-1, () => {}]);

export default ContextSelectedCharacter;
