import { Injectable, NotFoundException } from '@nestjs/common';
import { Employee } from './employee';
import { EmployeeDto } from './employee.dto';

@Injectable()
export class EmployeesService {
  private employees: Employee[] = [];
  private nextEmployeeId = 1;

  getAllEmployees() {
    return this.employees;
  }

  getEmployeeWithId(id: number) {
    const employee = this.employees.find((employee) => employee.id === id);
    if (!employee) {
      throw new NotFoundException();
    }
    return employee;
  }

  createEmployee(employee: EmployeeDto) {
    const newEmployee = {
      id: this.nextEmployeeId++,
      ...employee,
    };
    this.employees.push(newEmployee);
    return newEmployee;
  }

  updateEmployee(id: number, employee: EmployeeDto) {
    const employeeIndex = this.employees.findIndex(
      (employee) => employee.id === id,
    );
    if (!employeeIndex) {
      throw new NotFoundException();
    }
    this.employees[employeeIndex] = {
      ...this.employees[employeeIndex],
      name: employee.name,
      position: employee.position,
    };
    return employee;
  }

  deleteEmployee(id: number) {
    const employeeIndex = this.employees.findIndex(
      (employee) => employee.id === id,
    );
    if (!employeeIndex) {
      throw new NotFoundException();
    }
    return this.employees.splice(employeeIndex, 1);
  }
}
