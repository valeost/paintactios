import { Component, Output, EventEmitter } from "@angular/core";




@Component({
    selector: 'paginator',
    templateUrl: './pagination.component.html',
    styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent {
    pagValue: number = 10;
    
    @Output() changePaginationValue: EventEmitter<any> = new EventEmitter();
    @Output() scrollToEmmiter: EventEmitter<any> = new EventEmitter();
    ngOnInit() {
        this.changePaginationValue.emit(this.pagValue);
    }
    changePagination() {
        console.log(this.pagValue);
        this.changePaginationValue.emit(this.pagValue);
    }
    goToBottomList(){
        this.scrollToEmmiter.emit('BOTTOM');
    }
    goToTopList(){
        this.scrollToEmmiter.emit('TOP');
    }
}