import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http: HttpClient) { 
    this.getPokemon();
  }
  getPokemon(){
    let blastoise = this._http.get('https://pokeapi.co/api/v2/pokemon/9/');
    blastoise.subscribe(blastoise => {
      console.log(blastoise)
      console.log(`${blastoise['name'].charAt(0).toUpperCase() + blastoise['name'].substring(1)}'s abilities are ${blastoise['abilities'][0].ability.name} and ${blastoise['abilities'][1].ability.name}.`);
      let ability = this._http.get(blastoise["abilities"][0].ability.url);
      ability.subscribe(ability => {
        console.log(ability)
        console.log(`${ability['pokemon'].length} pokemon share the ${blastoise['abilities'][0].ability.name} ability.`);
      })
    });
  }
}
