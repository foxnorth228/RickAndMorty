import { useContext } from 'react';
import ContextPage from '@src/contexts/ContextPage';

const useContextPage = () => useContext(ContextPage);

export default useContextPage;
