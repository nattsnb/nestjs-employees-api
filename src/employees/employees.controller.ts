import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Post,
} from '@nestjs/common';
import { EmployeesService } from './employees.service';
import { EmployeeDto } from './employee.dto';

@Controller('employees')
export class EmployeesController {
  constructor(private readonly employeeService: EmployeesService) {}

  @Get()
  getAllEmployees() {
    return this.employeeService.getAllEmployees();
  }

  @Get(':id')
  getEmployeeWithId(@Param('id', ParseIntPipe) id: number) {
    return this.employeeService.getEmployeeWithId(id);
  }

  @Post()
  create(@Body() employee: EmployeeDto) {
    return this.employeeService.createEmployee(employee);
  }

  @Patch(':id')
  upDate(@Param('id', ParseIntPipe) id: number, @Body() employee: EmployeeDto) {
    return this.employeeService.upDateEmployee(id, employee);
  }

  @Delete(':id')
  deleteEmployee(@Param('id', ParseIntPipe) id: number) {
    return this.employeeService.deleteEmployee(id);
  }
}
