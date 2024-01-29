import {
  ICharacterFull,
  ICharacterLocation,
} from '@services/rickAndMorty/queries/characters/types';

const config = {
  textValues: [
    ['name', 'Name: '],
    ['status', 'Status: '],
    ['species', 'Species: '],
    ['type', 'Type: '],
    ['gender', 'Gender: '],
    ['origin', 'Origin'],
    ['location', 'Location'],
  ] as Array<[keyof ICharacterFull, string]>,
  locationTextValues: [
    ['name', 'name: '],
    ['type', 'type: '],
    ['dimension', 'dimension: '],
  ] as Array<[keyof ICharacterLocation, string]>,
};

export default config;
