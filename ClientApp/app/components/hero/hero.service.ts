
import { Injectable } from '@angular/core';
import { AuthHttp } from 'angular2-jwt';
import {Http} from '@angular/http';
import { Hero } from './hero';

@Injectable()
export class HeroService { 
    constructor(private authHttp: AuthHttp, private http: Http) {
    }

    save(hero: Hero) {
        return this.authHttp.post('/api/heroes', hero);
    }

    get(isAuth: boolean) {
        if (isAuth) {
            return this.authHttp.get('/api/heroes');
        } else {
            return this.http.get('/api/heroes');
        }
        
    }
}