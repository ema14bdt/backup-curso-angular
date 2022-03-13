import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { EmployeeSonComponent } from './employee-son/employee-son.component';
import { PropertyEmployeeComponent } from './property-employee/property-employee.component';

@NgModule({
  declarations: [
    AppComponent,
    EmployeeSonComponent,
    PropertyEmployeeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
