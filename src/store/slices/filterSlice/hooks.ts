import { changeFilter } from '@store/slices/filterSlice/index';
import { IFilterChangePayload } from '@store/slices/filterSlice/types';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@src/store';

export const useStoreGetFilter = () => {
  return useSelector((root: RootState) => root.filter);
};

export const useStoreChangeFilter = () => {
  const dispatch = useDispatch();
  return (payload: IFilterChangePayload) => dispatch(changeFilter(payload));
};
