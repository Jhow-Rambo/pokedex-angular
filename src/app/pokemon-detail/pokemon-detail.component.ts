import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GetPokemonService } from './services/get-pokemon.service';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
    selector: 'app-pokemon-detail',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './pokemon-detail.component.html'
})
export class PokemonDetailComponent implements OnInit {
    pokemonName!: string;
    pokemon: any;
    loading: boolean = true;

    constructor(private route: ActivatedRoute, private getPokemonService: GetPokemonService, private router: Router) {}

    ngOnInit(): void {
        this.route.paramMap.subscribe(params => {
            const name = params.get('name');

            if (name) {
                this.pokemonName = name;

                this.getPokemonService.getPokemon(this.pokemonName).subscribe(
                    (pokemon) => {
                        this.pokemon = pokemon;
                        this.loading = false;
                    },
                    (error) => {
                        console.error('Erro ao obter o Pokémon:', error);
                        this.loading = false;
                    }
                );
            } else {
                console.error('Nome do Pokémon não fornecido.');
                this.loading = false;
            }
        });
    }

    getPokemonImageUrl(pokemonId: number): string {
        return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonId}.png`
    }

    goToPokemonsPage(): void {
        this.router.navigate(['/pokemons']);
    }
}
