import { Component } from '@angular/core';
import { RouterOutlet,RouterLink, RouterLinkActive } from '@angular/router';
import { FirtsComponent } from "./firts/firts.component";
import { SecondComponent } from "./second/second.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, RouterLink, RouterLinkActive, FirtsComponent, SecondComponent]
})
export class AppComponent {
  title = 'rutas';
}
