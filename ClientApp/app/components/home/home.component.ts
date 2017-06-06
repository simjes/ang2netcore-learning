import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Hero } from '../hero/hero';
import { HeroService } from '../hero/hero.service';

@Component({
    selector: 'home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent {

    public heroes: Hero[];
    
    constructor(private authService: AuthService, private heroService: HeroService) {
        heroService.get().subscribe(result => {
            this.heroes = result.json() as Hero[];
        });
    }
    

    login() {
        this.authService.login();
    }
}
