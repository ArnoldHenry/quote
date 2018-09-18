import { Component, OnInit,Input } from '@angular/core';
import { Quoteproperties } from '../quoteproperties';

@Component({
  selector: 'app-quote-detail',
  templateUrl: './quote-detail.component.html',
  styleUrls: ['./quote-detail.component.css']
})
export class QuoteDetailComponent implements OnInit {

  // @Input() quote:Quoteproperties;
  quotes=[
    new Quoteproperties("Life is a cycle","anonymous","me")
  ]

  addNewQuote(quoteproperties){
    let quoteLength = this.quotes.length;
    quoteproperties.author=quoteLength + 1;
    this.quotes.push(quoteproperties);
    console.log("issa done");
    
  }

    deleteQuote(index){
      this.quotes.splice(index, 1);
  }
  constructor() { }

  ngOnInit() {
  }

}
