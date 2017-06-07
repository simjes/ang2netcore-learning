import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './components/app/app.component'
import { NavMenuComponent } from './components/navmenu/navmenu.component';
import { HomeComponent } from './components/home/home.component';
import { FetchDataComponent } from './components/fetchdata/fetchdata.component';
import { CounterComponent } from './components/counter/counter.component';
import { HeroComponent } from './components/hero/hero.component';
import { RankListComponent } from './components/ranklist/ranklist.component';
import { CallbackComponent } from './components/callback/callback.component';



export const sharedConfig: NgModule = {
    declarations: [
        AppComponent,
        NavMenuComponent,
        CounterComponent,
        FetchDataComponent,
        HomeComponent,
        HeroComponent,
        RankListComponent,
        CallbackComponent
    ],
    imports: [
        FormsModule,
        ReactiveFormsModule,
        HttpModule,
        RouterModule.forRoot([
            { path: '', redirectTo: 'home', pathMatch: 'full' },
            { path: 'home', component: HomeComponent },
            { path: 'counter', component: CounterComponent },
            { path: 'fetch-data', component: FetchDataComponent },
            { path: 'hero', component: HeroComponent },
            { path: 'callback', component: CallbackComponent },
            { path: '**', redirectTo: 'home' }
        ])
    ],
    bootstrap: [AppComponent]
};
