
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { EmployetableComponent } from './employeetable.component';
import { SearcherComponent } from './searcher/searcher.component';
import { ModeldataService } from '../../services/modeldata.service';

import { SharedModule } from './../../modules/shared.module';
import { TableComponent } from './table/table.component';
import { PaginationComponent } from './pagination/pagination.component';
import { DataService } from '../../services/data.service';
import { Employee } from '../../class/employee';

describe('EmployeeTableComponent', () => {
  let component: EmployetableComponent;
  let fixture: ComponentFixture<EmployetableComponent>;
    let service: DataService;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ 
          EmployetableComponent,
          PaginationComponent,
          SearcherComponent,
          TableComponent 
        ],
        imports: [
            SharedModule
        ],
        providers: [
            ModeldataService,
            DataService
        ]
    })
    .compileComponents();
    service = TestBed.get(ModeldataService);
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployetableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
    // it('search value', () => {

    //     (done: DoneFn) => {
    //         let employees: Employee[] = [];
    //         let promise: Promise<Employee[]>;
    //         service.getPersonData().then(value => {
    //             expect(value).toBe(employees);
    //             done();
    //         });
    //     }
    // });

});
