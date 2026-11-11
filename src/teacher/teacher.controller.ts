import {
  Body,
  Controller,
  Get,
  NotFoundException,
  Param,
  ParseIntPipe,
  Post,
  Query,
} from '@nestjs/common';

import { TeacherService } from './teacher.service.js';
import { CreateTeacherDto } from './dto/createTeacher.dto.js';
import { SearchTeacherDto } from './dto/searchteacher.dto.js';
import { EmailPipe } from '../common/pipe/email.pipe.js';

@Controller('teacher')
export class TeacherController {
  constructor(private readonly teacherService: TeacherService) {}

  @Get()
  getTeachers(@Query() filters: SearchTeacherDto) {
    return this.teacherService.getAllTeacher(filters);
  }

  // @Get('email')
  // searchByEmail(@Query('email', EmailPipe) email: string) {
  //   return {
  //     message: 'Email validated successfully',
  //     email,
  //   };
  // }

  @Get('email')
  searchByEmail(@Query('email', EmailPipe) email: string) {
    const teacher = this.teacherService.getTeacherByEmail(email);

    if (!teacher) {
      throw new NotFoundException('Teacher not found');
    }

    return teacher;
  }
  @Get('course/:course')
  getTeacherCourse(@Param('course') course: string) {
    return this.teacherService.getTeacherCourse(course);
  }

  @Get(':id')
  getTeacherId(@Param('id', ParseIntPipe) id: number) {
    return this.teacherService.getTeacherId(id);
  }

  @Post()
  createTeacher(@Body() teacher: CreateTeacherDto) {
    return this.teacherService.createTeacher(
      teacher.name,
      teacher.course,
      teacher.age,
      teacher.active ?? true,
      teacher.address,
      teacher.email,
    );
  }
}
