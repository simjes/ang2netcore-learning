
import { Injectable } from '@angular/core';
import { AuthHttp } from 'angular2-jwt';
import { Hero } from './hero';

@Injectable()
export class HeroService { 
    constructor(private authHttp: AuthHttp) {
    }

    save(hero: Hero) {
        return this.authHttp.post('/api/heroes', hero);
    }

    get() {
        return this.authHttp.get('/api/heroes');
    }
}