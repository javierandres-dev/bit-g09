import { Component, inject, OnInit } from '@angular/core';
import { PokeapiService } from '../../services/pokeapi.service';

@Component({
  selector: 'app-pokeapi',
  imports: [],
  templateUrl: './pokeapi.component.html',
  styleUrl: './pokeapi.component.css',
})
export class PokeapiComponent implements OnInit {
  pokeapiService = inject(PokeapiService);

  pokemons: any;

  ngOnInit(): void {
    this.obtenerPokemons();
  }

  obtenerPokemons() {
    this.pokeapiService.getPokemons().subscribe((respuesta: any) => {
      this.pokemons = respuesta.results;
      this.agregarImagenes();
    });
  }

  agregarImagenes() {
    for (let i = 0; i < this.pokemons.length; i++) {
      const pokemon = this.pokemons[i];
      this.pokeapiService
        .getPokemon(pokemon.url)
        .subscribe((respuesta: any) => {
          this.pokemons[i].img = respuesta.sprites.front_default;
        });
    }
  }
}
