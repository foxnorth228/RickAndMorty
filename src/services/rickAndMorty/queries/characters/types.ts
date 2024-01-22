export interface ICharacterCommon {
  name: string;
  status: string;
  gender: string;
  image: string;
  id: string;
}

export interface IResponseCharacter {
  characters: {
    info: {
      pages: number;
    };
    results: ICharacterCommon[];
  };
}
