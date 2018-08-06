import { SearcherComponent } from './pages/employeetable/searcher/searcher.component';
import { PaginationComponent } from './pages/employeetable/pagination/pagination.component';
import { FooterComponent } from './pages/footer/footer.component';
import { HeaderComponent } from './pages/header/header.component';
import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { EmployetableComponent } from './pages/employeetable/employeetable.component';
import { TableComponent } from './pages/employeetable/table/table.component';
import { SharedModule } from './modules/shared.module';
import { EmployeeTableModule } from './pages/employeetable/empoloyeetable.module';
import { FormsModule } from '@angular/forms';
import { DataService } from './services/data.service';
describe('AppComponent', () => {
  beforeEach(async(() => {
    const routes: Routes = [
      {
        path: "",
        component: EmployetableComponent,
    
      }
    ]
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        HeaderComponent,
        FooterComponent,
        EmployetableComponent
      ],
      imports: [
        SharedModule,
        EmployeeTableModule
 
      ],
      providers: [DataService],
   
    }).compileComponents();
  }));
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));


});
