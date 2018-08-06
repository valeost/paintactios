
import { NgModule } from "@angular/core";
import { TableComponent } from "./table/table.component";
import { SearcherComponent } from './searcher/searcher.component';
import { ModeldataService } from "../../services/modeldata.service";
import { SharedModule } from "../../modules/shared.module";
import { PaginationComponent } from "./pagination/pagination.component";

@NgModule({
    declarations: [TableComponent, SearcherComponent, PaginationComponent],
    imports: [SharedModule],
    exports: [SearcherComponent, TableComponent, PaginationComponent],
    providers: [ModeldataService]
})
export class EmployeeTableModule { }