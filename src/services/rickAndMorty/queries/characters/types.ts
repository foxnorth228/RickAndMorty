export interface ICharacterCommon {
  name: string;
  status: string;
  gender: string;
  image: string;
  id: number;
}

export interface ICharacterLocation {
  name: string;
  type: string;
  dimension: string;
}

export interface ICharacterFull extends ICharacterCommon {
  species: string;
  type: string;
  origin: ICharacterLocation;
  location: ICharacterLocation;
}

export interface IResponseCharacter {
  characters: {
    info: {
      pages: number;
    };
    results: ICharacterCommon[];
  };
}
