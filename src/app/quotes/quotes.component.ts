import { Component, OnInit,Output,EventEmitter } from '@angular/core';
import { Quoteproperties } from '../quoteproperties';

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {

  myQuote = new Quoteproperties("","","");
  @Output() emitQuote= new EventEmitter<Quoteproperties>();

  submitQuote(){
    // this.myQuote= new Quoteproperties(this.author,this.quote,this.myname)
    this.emitQuote.emit(this.myQuote);  
    console.log("I have been clicked");
      
}
  constructor() { }

  ngOnInit() {
  }

}
