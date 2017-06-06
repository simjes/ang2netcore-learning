import { Component, Input } from '@angular/core';
import { Hero } from '../hero/hero';

@Component({
    selector: 'ranklist',
    templateUrl: './ranklist.component.html',
    styleUrls: ['./ranklist.component.css']
})

export class RankListComponent
{
    @Input() heroes: Hero[];

    constructor() {
        
    }
}
