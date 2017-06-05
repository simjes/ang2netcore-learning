import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import 'rxjs/add/operator/filter';
//import {WebAuth} from 'auth0-js';
//import * as auth0 from 'auth0-js';

declare var auth0: any;

@Injectable()
export class AuthService {

    constructor(public router: Router) {
        auth0 = new auth0.WebAuth({
            clientID: 'I1K7ZFVeLGMacn7sRvjKcLToUKfLBLxu',
            domain: 'simjes.eu.auth0.com',
            responseType: 'token id_token',
            audience: 'https://simjes.eu.auth0.com/userinfo',
            redirectUri: 'http://localhost:4200/callback',
            scope: 'openid',
            
        });
    }

    public login(): void {
        auth0.authorize();
        //this.auth0.authorize();
    }

    public handleAuthentication(): void {
        auth0.parseHash((err, authResult) => {
            console.log(authResult);
            if (authResult && authResult.accessToken && authResult.idToken) {
                window.location.hash = '';
                this.setSession(authResult);
                this.router.navigate(['/home']);
            } else if (err) {
                this.router.navigate(['/home']);
                console.log(err);
                alert(`Error: ${err.error}. Check the console for further details.`);
            }
        });
    }

    private setSession(authResult): void {
        // Set the time that the access token will expire at
        const expiresAt = JSON.stringify((authResult.expiresIn * 1000) + new Date().getTime());
        localStorage.setItem('access_token', authResult.accessToken);
        localStorage.setItem('id_token', authResult.idToken);
        localStorage.setItem('expires_at', expiresAt);
    }

    public logout(): void {
        // Remove tokens and expiry time from localStorage
        localStorage.removeItem('access_token');
        localStorage.removeItem('id_token');
        localStorage.removeItem('expires_at');
        // Go back to the home route
        this.router.navigate(['/']);
    }

    public isAuthenticated(): boolean {
        // Check whether the current time is past the
        // access token's expiry time
        const expiresAt = JSON.parse(localStorage.getItem('expires_at'));
        return new Date().getTime() < expiresAt;
    }

}