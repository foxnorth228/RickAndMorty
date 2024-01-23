export interface IFilter {
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
}

export interface IFilterChangePayload {
  key: keyof IFilter;
  value: string;
}
