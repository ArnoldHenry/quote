import { Component, OnInit,Output,EventEmitter } from '@angular/core';
import { Quoteproperties } from '../quoteproperties';

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {

 
  @Output() emitQuote= new EventEmitter<Quoteproperties>();
  myQuote = new Quoteproperties(0,"","","");

  submitQuote(){
    // this.myQuote= new Quoteproperties(this.author,this.quote,this.myname)
    this.emitQuote.emit(this.myQuote);  
    this.myQuote = new Quoteproperties(0,"","","");
      
}
  constructor() { }

  ngOnInit() {
  }

}
