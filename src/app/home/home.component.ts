import { Component, OnInit, ViewChild } from '@angular/core';
import { DialogComponent } from '@syncfusion/ej2-angular-popups';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public employees: any[] = [
    { id: 1, firstName: 'John', lastName: 'Doe', gender: 'Male', phone: '1234567890', department: 'HR', payRate: 30, jobTitle: 'Manager', hireDate: new Date('2020-01-01') },
    { id: 2, firstName: 'Jane', lastName: 'Smith', gender: 'Female', phone: '9876543210', department: 'IT', payRate: 25, jobTitle: 'Developer', hireDate: new Date('2019-05-15') },
    // Add more employee data here
  ];
  public genderData: string[] = ['Male', 'Female', 'Other'];
  public dialogVisible: boolean = false;
  public selectedEmployee: any = {};
  public searchText: string = '';
  public filteredEmployees: any[] = this.employees;

  @ViewChild('dialog') dialog: DialogComponent;

  public dialogButtons: any[] = [
    { click: this.onDialogSubmit.bind(this), buttonModel: { content: 'Submit', isPrimary: true } }
  ];

  constructor() { }

  ngOnInit(): void { }

  openDialog(data: any): void {
    if (data && data.id) {
      this.selectedEmployee = { ...data };
    } else {
      this.selectedEmployee = {};
    }
    this.dialogVisible = true;
  }

  onDialogSubmit(): void {
    if (this.selectedEmployee.firstName && this.selectedEmployee.lastName) {
      const index = this.employees.findIndex(emp => emp.id === this.selectedEmployee.id);
      if (index !== -1) {
        this.employees[index] = { ...this.selectedEmployee };
      } else {
        const maxId = this.employees.length > 0 ? Math.max(...this.employees.map(emp => emp.id)) : 0;
        this.selectedEmployee.id = maxId + 1;
        this.employees.push({ ...this.selectedEmployee });
      }
      this.dialogVisible = false;
      this.onSearch();
    }
  }

  deleteEmployee(data: any): void {
    const index = this.employees.findIndex(emp => emp.id === data.id);
    if (index !== -1) {
      this.employees.splice(index, 1);
      this.onSearch();
    }
  }
  closeDialog(): void {
    this.dialogVisible = false;
  }
  onSearch(): void {
    if (this.searchText) {
      this.filteredEmployees = this.employees.filter(emp =>
        Object.values(emp).some(val => {
          if (typeof val === 'string' || typeof val === 'number') {
            return val.toString().toLowerCase().includes(this.searchText.toLowerCase());
          }
          return false;
        })
      );
    } else {
      this.filteredEmployees = [...this.employees];
    }
  }
}
