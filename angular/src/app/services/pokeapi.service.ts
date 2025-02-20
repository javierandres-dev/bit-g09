import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class PokeapiService {
  constructor(private httpClient: HttpClient) {}

  getPokemons() {
    return this.httpClient.get('https://pokeapi.co/api/v2/pokemon/');
  }

  getPokemon(url: string) {
    return this.httpClient.get(url);
  }
}
