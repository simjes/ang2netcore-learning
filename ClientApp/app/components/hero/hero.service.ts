
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { Hero } from './hero';

@Injectable()
export class HeroService { 
  constructor(private http: Http) {
  }

  save(hero: Hero) {
      return this.http.post('/api/heroes', hero);
  }
}