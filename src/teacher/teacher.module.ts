import { Module } from '@nestjs/common';

import { TeacherController } from './teacher.controller.js';
import { TeacherRepository } from './repository/teacher.repository.js';
import { TeacherService } from './teacher.service.js';

@Module({
  controllers: [TeacherController],
  providers: [TeacherService, TeacherRepository],
})
export class TeacherModule {}
