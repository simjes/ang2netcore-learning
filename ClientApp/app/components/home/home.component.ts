import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Hero } from '../hero/hero';
import { HeroService } from '../hero/hero.service';


@Component({
    selector: 'home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
    public heroes: Hero[];
    
    constructor(private authService: AuthService, private heroService: HeroService) {
        
        
    }

    ngOnInit(): void {
         //if (this.authService.isAuthenticated()) {
             this.heroService.get().subscribe(result => {
                 this.heroes = result.json() as Hero[];
             });
         //}
    }

    login() {
        this.authService.login();
    }

    logout() {
        this.authService.logout();
    }
}
