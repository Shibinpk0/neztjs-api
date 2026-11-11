import {
  Body,
  Controller,
  Get,
  Param,
  ParseIntPipe,
  Post,
} from '@nestjs/common';

import { EmployeService } from './employe.service.js';
import { CreateEmployeeDto } from './dto/createemployee.dto.js';

@Controller('employe')
export class EmployeController {
  constructor(private readonly employeService: EmployeService) {}

  @Get()
  getEmployees() {
    return this.employeService.getAllEmployees();
  }

  @Get(':id')
  getEmployeeById(@Param('id', ParseIntPipe) id: number) {
    return this.employeService.getEmployeeById(id);
  }

  @Post()
  createEmployee(@Body() employee: CreateEmployeeDto) {
    return this.employeService.createEmployee(
      employee.name,
      employee.email,
      employee.age,
      employee.address,
    );
  }
}
