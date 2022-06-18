import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-app';
  option="HHHHHHHHHHHHHHHello from pipe";
  name='jalal';
  minValue=2;
  maxValue=7;
  public student='abeer armoush'
  //student='';
  message='';
  data=10;
  disabled=true;
  public classes={
textColor:!this.disabled,
textBorder:this.disabled,
  }

onsendStudent(data:any){
this.message=data;
}
  getData(data:number)
  {
    console.log(data);
  this.data=data;
  }

}
