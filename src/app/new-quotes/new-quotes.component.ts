import { Component, OnInit, Input, Output,EventEmitter } from '@angular/core';
import { Quoteproperties } from '../quoteproperties';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-new-quotes',
  templateUrl: './new-quotes.component.html',
  styleUrls: ['./new-quotes.component.css']
})
export class NewQuotesComponent implements OnInit {

@Input() quoteproperties:Quoteproperties;
@Output()isDone=new EventEmitter<boolean>();

delete(done:boolean){
  this.isDone.emit(done)
}

  constructor() { }

  ngOnInit() {
  }

}
