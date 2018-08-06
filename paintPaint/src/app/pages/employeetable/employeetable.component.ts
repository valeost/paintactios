
import { Person } from './../../class/person';
import { Component, ViewChild, EventEmitter, Output } from "@angular/core";
import { ModeldataService } from "../../services/modeldata.service";
import { TableComponent } from './table/table.component';

@Component({
    selector: 'app-employeetable',
    templateUrl: 'employeetable.component.html',
    styleUrls: ['./employeetable.component.scss']
})
export class EmployetableComponent {
    public persons: Person[];
    pagination: number;
    wordToSearch: string;
    @ViewChild(TableComponent) table !: TableComponent;
    constructor(private modeldata: ModeldataService) {
    }
    ngOnInit() {
        this.persons = this.modeldata.mapToPersonClass();
        // console.log('PERSONS', this.persons);
    }
    paginationChanged(pag: number){
        this.pagination = pag;
        // console.log('PAGINATION', pag);
        // this.changePaginationEmmiter.emit(this.pagination);
        
    }
    reciveSearchedWord(word: string) {
        console.log('WORD', word);
        this.wordToSearch = word;
        this.persons = this.modeldata.searchByWord(word);
    
    }
    scrollTo(position: string) {
        console.log('SCROLL TO', position);
        this.table.scrollToPosition(position);
    }

}