import { getCurrencySymbol } from '@angular/common';
import { Component, OnInit,Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
@Input() number=0;
@Input() student='';
@Output() sendData=new EventEmitter<number>();
@Output()  sendStudent=new EventEmitter<any>();
@Input() minValue=0;
@Input() maxValue=0;
color='black';
  constructor() { }

  ngOnInit(): void {
  }
  onsendData(data:number){

this.sendData.emit(data);//for send data
  }
  counterdata(type:string){
type=="plus" ?this.number++:this.number--;
this.onsendData(this.number);
this.changeColor();
  }
onsendStudent(){
  this.sendStudent.emit("hello from child");
}
changeColor():void {
  if(this.number<this.minValue){
    this.color='yellow'
  }
  else if(this.number>this.maxValue){
    this.color='red'
  }
  else if(this.number>this.minValue &&this.number<this.maxValue ){
    this.color='green'
  }
}
}
