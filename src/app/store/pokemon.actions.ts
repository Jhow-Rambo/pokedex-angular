import { createAction } from '@ngrx/store';
import { Pokemon } from './pokemon.reducer';

export const addPokemons = createAction('[Pokemon] Add Pokemons', (pokemons: Pokemon[]) => ({ pokemons }));
