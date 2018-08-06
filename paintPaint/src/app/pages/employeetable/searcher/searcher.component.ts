import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-searcher',
  templateUrl: './searcher.component.html',
  styleUrls: ['./searcher.component.scss']
})
export class SearcherComponent implements OnInit {
  searchedWord:string;
  @Output() searchedWordEmitter: EventEmitter<any> = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }
  submitSearchedWord(){
    this.searchedWordEmitter.emit(this.searchedWord);
  }
}
