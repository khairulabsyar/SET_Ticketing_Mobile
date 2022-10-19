import { Pokemon } from "../api";

export type PokemonStackParamList = {
  Pokedex: undefined;
  PokemonDetail: {
    pokemon: Pokemon;
  };
  Register: undefined;
  Login: undefined;
};

export type TabParamList = {
  About: undefined;
  Abilities: Pokemon["abilities"];
  Stats: Pokemon["stats"];
  Moves: Pokemon["moves"];
};
