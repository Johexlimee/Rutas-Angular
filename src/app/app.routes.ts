import { Routes } from '@angular/router';
import { FirtsComponent } from './firts/firts.component';
import { SecondComponent } from './second/second.component';

export const routes: Routes = [
    { path:'first', component: FirtsComponent },
    { path:'second', component: SecondComponent }
];
