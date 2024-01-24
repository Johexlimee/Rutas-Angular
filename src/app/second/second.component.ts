import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-second',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './second.component.html',
  styleUrl: './second.component.css'
})
export class SecondComponent {
  title:string = "Dato que se pasara una propiedad de destino '<p>'";
  text1:string = "Reciclaje";
  private number1:number = 200;
  getnumber1():number {
    return this.number1;
  }
  metodoEjemplo($event:any):void{
    console.log($event);
  }
  metodoEjemplo2($event:any):void{
    console.log($event);
  }
}
