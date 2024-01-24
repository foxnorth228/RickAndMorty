export interface ICharacterCommon {
  name: string;
  status: string;
  gender: string;
  image: string;
  id: number;
}

export interface ICharacterFull extends ICharacterCommon{
  species: string;
  type: string;
  origin: {
    name: string;
  };
  location: {
    name: string;
  };
}

export interface IResponseCharacter {
  characters: {
    info: {
      pages: number;
    };
    results: ICharacterCommon[];
  };
}
