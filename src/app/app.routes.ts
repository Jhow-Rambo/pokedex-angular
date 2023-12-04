import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { PokemonsComponent } from './listPokemons/pokemons.component';
import { PokemonDetailComponent } from './pokemon-detail/pokemon-detail.component';

export const routes: Routes = [
    {
        path: '',
        component: LoginComponent,
    },
    {
        path: 'pokemons',
        component: PokemonsComponent,
    },
    {
        path: 'pokemon/:name',
        component: PokemonDetailComponent,
    },
];
