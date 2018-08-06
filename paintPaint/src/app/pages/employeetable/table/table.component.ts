import { Component, OnInit, Input, Inject, ViewChild, ElementRef } from '@angular/core';


@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {
  @Input() employees = [];
  @Input() pagination: number;
  @ViewChild("table") table: ElementRef;

  constructor() { }

  ngOnInit() {
    console.log('EMPLOYEES', this.employees)
    console.log('PAGINATION', this.pagination);
  }
  searcheItem(word: string) {
    console.log('LA PALABRA ES', word);
  }
  scrollToPosition(position: string) {
    switch (position) {
      case 'BOTTOM':
      this.table.nativeElement.scrollTop = this.table.nativeElement.scrollHeight
      console.log('scroll to', position);
      
        break;
      case 'TOP':
      this.table.nativeElement.scrollTop = 0;
      console.log('scroll to', position);
        break;

      default:
        break;
    }
   
  }
}
