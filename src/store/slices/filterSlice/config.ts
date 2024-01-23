import { IFilter } from './types';

export const filterSliceName = 'filter';

const config = {
  name: filterSliceName,
  initialState: {
    name: '',
    status: '',
    species: '',
    type: '',
    gender: '',
  } as IFilter,
};

export default config;
