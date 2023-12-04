import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class GetPokemonService {
    private apiUrl = 'https://pokeapi.co/api/v2/pokemon';

    constructor(private http: HttpClient) { }

    getPokemon(pokemonName: string): Observable<any> {
        const url = `${this.apiUrl}/${pokemonName}`;
        return this.http.get<any>(url);
    }
}
