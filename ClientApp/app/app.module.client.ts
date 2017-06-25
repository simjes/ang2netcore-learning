import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { sharedConfig } from './app.module.shared';
import { HeroService } from './components/hero/hero.service';
import { AUTH_PROVIDERS } from 'angular2-jwt';
import { AuthService } from './services/auth.service';



@NgModule({
    declarations: sharedConfig.declarations,
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        ...sharedConfig.imports
    ],
    providers: [
        { provide: 'ORIGIN_URL', useValue: location.origin },
        HeroService,
        ...AUTH_PROVIDERS,
        AuthService
    ],
    bootstrap: sharedConfig.bootstrap
})
export class AppModule {
}
