import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  public location: string = window.location.href;
  public id: string = 'customId';
  public cls: string = 'error';
  public hasError: boolean = false;
  public clsForCom = {
    "error": !this.hasError,
    "test":true
  }
  public error:boolean=true;

  public text:string='';


  constructor() { }

  ngOnInit(): void {
  }
  fn(e:any){
    console.log(e);
    this.error=!this.error;
  }
  showValue(val:any){
    console.log(val)

  }

}
