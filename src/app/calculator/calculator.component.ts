import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {
NumberOne:number;
NumberTwo:number;
cal:string;
result:number;
updateCal(cal){
  this.cal=cal;
}
  constructor() { }
updateNumberOne(num1){
    this.NumberOne=Number(num1);
}
updateNumberTwo(num2){
    this.NumberTwo=Number(num2);
}
public Caculator(){
    switch (this.cal) {
      case '+':
        this.result= this.NumberOne +this.NumberTwo;
        break;
      case '-':
        this.result= this.NumberOne-this.NumberTwo;
        break;
      case '*':
        this.result= this.NumberTwo*this.NumberOne;
        break;
      case '/':
        this.result= this.NumberOne/this.NumberTwo;
        break;
    }

}

  ngOnInit() {
  }

}
