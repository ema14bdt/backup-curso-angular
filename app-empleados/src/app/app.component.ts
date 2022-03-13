import { Component } from '@angular/core';
import { Employee } from './employee.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'Listado de empleados';

  employees:Employee[]=[
    new Employee('Leo', 'Diaz', 'President', 100000),
    new Employee('Juan', 'Perez', 'Director', 50000),
    new Employee('Pedro', 'Gonzalez', 'Gerente', 30000),
    new Employee('Maria', 'Lopez', 'Secretaria', 20000),
  ];

  addEmployee() {
    let myEmployee = new Employee(this.inputName, this.inputLastName, this.inputPosition, this.inputSalary);
    this.employees.push(myEmployee);
  }

  inputName:string='';
  inputLastName:string='';
  inputPosition:string='';
  inputSalary:number=0;
}
