import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HeaderComponent } from './pages/header/header.component';
import { FooterComponent } from './pages/footer/footer.component';
import { EmployetableComponent } from './pages/employeetable/employeetable.component';
import { SharedModule } from './modules/shared.module';
import { EmployeeTableModule } from './pages/employeetable/empoloyeetable.module';
import { RouterModule, Routes } from '@angular/router';
import { DataService } from './services/data.service';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';


const routes: Routes = [
  {
    path: "",
    component: EmployetableComponent,

  }
]
@NgModule({

  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    EmployetableComponent
    
 
  ],
  imports: [


    SharedModule,
    EmployeeTableModule,
 
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { 

}
