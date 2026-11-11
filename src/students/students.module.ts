import { Module } from '@nestjs/common';
import { StudentsController } from './students.controller.js';
import { StudentService } from './students.service.js';

@Module({
  controllers: [StudentsController],
  providers: [StudentService],
})
export class StudentsModule {}
