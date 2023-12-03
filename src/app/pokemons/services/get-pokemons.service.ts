import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class GetPokemonsService {
    private apiUrl = 'https://pokeapi.co/api/v2/pokemon';

    constructor(private http: HttpClient) { }

    getPokemons(): Observable<any> {
        const url = `${this.apiUrl}?limit=10`;
        return this.http.get<any>(url);
    }
}
