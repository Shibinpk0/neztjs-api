import { Injectable } from '@nestjs/common';

import { EmployeeRepository } from './repository/employee.repo.js';
import { AddressDto } from './dto/address.dto.js';

@Injectable()
export class EmployeService {
  constructor(private employeeRepository: EmployeeRepository) {}

  getAllEmployees() {
    return this.employeeRepository.findAll();
  }

  getEmployeeById(id: number) {
    return this.employeeRepository.findById(id);
  }

  createEmployee(
    name: string,
    email: string,
    age: number,
    address: AddressDto,
  ) {
    return this.employeeRepository.create(name, email, age, address);
  }
}
