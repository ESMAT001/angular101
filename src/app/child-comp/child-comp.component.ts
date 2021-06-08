import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child-comp',
  templateUrl: './child-comp.component.html',
  styleUrls: ['./child-comp.component.css']
})
export class ChildCompComponent implements OnInit {

  @Input('parentData') data:any;
  @Output() eventForParent=new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }
  sndData(){
    this.eventForParent.emit("DATA from child!");
  }

}
