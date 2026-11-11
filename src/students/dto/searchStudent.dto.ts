import { Transform, Type } from 'class-transformer';
import { IsBoolean, IsInt, IsOptional, IsString, Min } from 'class-validator';

export class SearchStudentDto {
  @IsOptional()
  @IsString()
  teacherName?: string;

  @IsOptional()
  @IsString()
  course?: string;

  @IsOptional()
  @Type(() => Number)
  @IsInt()
  @Min(18)
  age?: number;

  @IsOptional()
  @Transform(({ value }) => {
    if (value === 'true') return true;
    if (value === 'false') return false;
    return value;
  })
  @IsBoolean()
  active?: boolean;
}
