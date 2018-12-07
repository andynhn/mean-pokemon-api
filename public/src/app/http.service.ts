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
    let bulbasaur = this._http.get('https://pokeapi.co/api/v2/pokemon/1/');
    bulbasaur.subscribe(data => 
      console.log(`${data['name']}'s abilities are ${data['abilities'][0].ability.name} and ${data['abilities'][1].ability.name}.`)
      )
  }
}
