import { IContextPage } from '@src/contexts/ContextPage/types';
import { createContext } from 'react';

const ContextPage = createContext<IContextPage>([1, () => {}]);

export default ContextPage;
