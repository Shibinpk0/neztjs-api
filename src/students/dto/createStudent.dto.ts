import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import {
  IsBoolean,
  IsEmail,
  IsInt,
  IsNotEmpty,
  IsOptional,
  IsString,
  MaxLength,
  Min,
  MinLength,
} from 'class-validator';

export class CreateStudentDto {
  @ApiProperty({
    description: 'student name',
    example: 'jhon doe',
  })
  @IsString()
  @IsNotEmpty()
  @MaxLength(30)
  @MinLength(1)
  name: string;

  @IsEmail()
  email: string;

  @Type(() => Number)
  @IsInt()
  @Min(18)
  age: number;

  @IsString()
  @IsNotEmpty()
  course: string;

  @IsOptional()
  @IsString()
  teacherName?: string;

  @IsOptional()
  @IsBoolean()
  active?: boolean;
}
