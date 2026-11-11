import { Type } from 'class-transformer';

import {
  IsEmail,
  IsInt,
  IsNotEmpty,
  IsString,
  MaxLength,
  Min,
  MinLength,
  ValidateNested,
} from 'class-validator';

import { AddressDto } from './address.dto.js';

export class CreateEmployeeDto {
  @IsString()
  @IsNotEmpty()
  @MaxLength(30)
  @MinLength(1)
  name: string;

  @IsEmail()
  email: string;

  @IsInt()
  @Min(18)
  age: number;

  @ValidateNested()
  @Type(() => AddressDto)
  address: AddressDto;
}
