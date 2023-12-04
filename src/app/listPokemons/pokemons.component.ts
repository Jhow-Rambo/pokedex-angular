import { Component, OnInit } from '@angular/core';
import { GetPokemonsService } from './services/get-pokemons.service';
import { addPokemons } from '../store/pokemon.actions';
import { Store, select } from '@ngrx/store';
import { Pokemon, PokemonState, selectPokemons } from '../store/pokemon.reducer';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
    selector: 'app-pokemons',
    templateUrl: './pokemons.component.html',
    styleUrls: ['./pokemons.component.sass'],
    standalone: true,
    imports: [CommonModule],
})
export class PokemonsComponent implements OnInit {
    storedPokemons: Pokemon[] = [];
    loading: boolean = true;

    constructor(private getPokemonService: GetPokemonsService, private store: Store<PokemonState>, private router: Router) { }

    ngOnInit(): void {
        this.getPokemonService.getPokemons().subscribe(
            (pokemons) => {
                this.store.dispatch(addPokemons(pokemons.results));
                this.storedPokemons = pokemons.results;
                this.loading = false;
            }
        );
    }

    goToPokemonPage(pokemonName: string): void {
        this.router.navigate(['/pokemon', pokemonName]);
    }
}
