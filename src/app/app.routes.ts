import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { PokemonsComponent } from './pokemons/pokemons.component';

export const routes: Routes = [
    {
        path: '',
        component: LoginComponent,
    },
    {
        path: 'pokemons',
        component: PokemonsComponent,
    }
];
