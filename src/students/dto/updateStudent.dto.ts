import { PartialType } from '@nestjs/mapped-types';
import { CreateStudentDto } from './createStudent.dto.js';

export class UpdateStudentDto extends PartialType(CreateStudentDto) {}
