import { Component } from '@angular/core';

@Component({
  selector: 'app-firts',
  standalone: true,
  imports: [],
  templateUrl: './firts.component.html',
  styleUrl: './firts.component.css'
})
export class FirtsComponent {
  flag:boolean = true;
  myVar:any = 909;
  myCad:string = `Suma ${this.myVar}`;
  number1:number = 1;
  myArray!:number[];
  myArray2:number[] = [4,5,6,7,8,9,10,11,12];

  table = {
    name: 'table',
    width: 90,
    height: 100
  }

  constructor() {
    this.myArray = [4,5,6,7,8,9,10,11,12];
  }

}
