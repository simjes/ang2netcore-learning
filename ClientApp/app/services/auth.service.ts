import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import 'rxjs/add/operator/filter';
//import {WebAuth} from 'auth0-js';
//import * as auth0 from 'auth0-js';

declare var auth0: any;

@Injectable()
export class AuthService {
    userProfile : any;

    constructor(public router: Router) {
        this.userProfile = JSON.parse(localStorage.getItem('profile'));

        auth0 = new auth0.WebAuth({
            clientID: 'I1K7ZFVeLGMacn7sRvjKcLToUKfLBLxu',
            domain: 'simjes.eu.auth0.com',
            responseType: 'token id_token',
            audience: 'https://simjes.eu.auth0.com/userinfo',
            redirectUri: 'https://localhost:44320/callback',
            scope: 'openid profile',
            leeway: 30
            
        });
    }

    public login(): void {
        auth0.authorize();
    }

    public handleAuthentication(): void {
        console.log("authentication being handled");
        auth0.parseHash((err, authResult) => {
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
        console.log(authResult);
        const expiresAt = JSON.stringify((authResult.expiresIn * 1000) + new Date().getTime());
        localStorage.setItem('access_token', authResult.accessToken);
        localStorage.setItem('token', authResult.idToken);
        localStorage.setItem('expires_at', expiresAt);

        this.getUserProfile(authResult);
    }
    
    private getUserProfile(authResult) {
        auth0.client.userInfo(authResult.accessToken,
            (error, profile) => {
                localStorage.setItem('profile', JSON.stringify(profile));
            });
    }

    public logout(): void {
        // Remove tokens and expiry time from localStorage
        localStorage.removeItem('access_token');
        localStorage.removeItem('token');
        localStorage.removeItem('expires_at');
        localStorage.removeItem('profile');
        this.userProfile = null;
        // Go back to the home route
        window.location.replace('/logout');
        //this.router.navigate(['/']);
    }

    public isAuthenticated(): boolean {
        // Check whether the current time is past the
        // access token's expiry time
        const expiresAt = JSON.parse(localStorage.getItem('expires_at'));
        return new Date().getTime() < expiresAt;
        //return tokenNotExpired();
    }

}