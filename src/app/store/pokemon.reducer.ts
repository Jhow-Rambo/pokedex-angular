import { createFeatureSelector, createReducer, createSelector, on } from '@ngrx/store';
import { addPokemons } from './pokemon.actions';

export interface PokemonState {
    pokemons: Pokemon[];
}

export interface Pokemon {
    name: string;
    url: string;
}

const initialState: PokemonState = {
    pokemons: [],
};

export const pokemonReducer = createReducer(
    initialState,
    on(addPokemons, (state, { pokemons }) => ({ ...state, pokemons }))
);


const getPokemonFeatureState = createFeatureSelector<PokemonState>('pokemonReducer');

export const selectPokemons = createSelector(
    getPokemonFeatureState,
    state => state.pokemons
);
