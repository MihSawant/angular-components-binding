import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  oddNumbers:number[] = [];
  evenNumbers:number[] = [];


  onIntervalFired(intervalNum: number){
   if(intervalNum % 2 === 0){
    this.evenNumbers.push(intervalNum);
   } else{
    this.oddNumbers.push(intervalNum);
   }
  }
  
}
