import { Module } from '@nestjs/common';

import { EmployeService } from './employe.service.js';
import { EmployeController } from './employe.controller.js';
import { EmployeeRepository } from './repository/employee.repo.js';

@Module({
  providers: [EmployeService, EmployeeRepository],
  controllers: [EmployeController],
})
export class EmployeModule {}
