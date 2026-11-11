// import { Type } from 'class-transformer';
// import { IsString, IsNotEmpty, Matches, ValidateNested } from 'class-validator';
// import { AddressDto } from './adress.dto.js';

// export class CreateTeacherDto {
//   @Type(() => String)
//   @IsString()
//   @IsNotEmpty()
//   @Matches(/^[a-zA-Z\s]+$/, {
//     message: 'Name must contain only letters',
//   })
//   name: string;

//   @IsString()
//   @IsNotEmpty()
//   course: string;

//   @ValidateNested()
//   @Type(() => AddressDto)
//   address: AddressDto;
// }

import { Type } from 'class-transformer';
import {
  IsString,
  IsNotEmpty,
  Matches,
  ValidateNested,
  IsInt,
  Min,
  IsBoolean,
  IsOptional,
} from 'class-validator';

import { AddressDto } from '../../employe/dto/address.dto.js';

export class CreateTeacherDto {
  @Type(() => String)
  @IsString()
  @IsNotEmpty()
  @Matches(/^[a-zA-Z\s]+$/, {
    message: 'Name must contain only letters',
  })
  name: string;

  @IsString()
  @IsNotEmpty()
  course: string;

  @Type(() => Number)
  @IsInt()
  @Min(18)
  age: number;

  @IsOptional()
  @IsBoolean()
  active?: boolean;

  @ValidateNested()
  @Type(() => AddressDto)
  address: AddressDto;

  @IsOptional()
  @IsString()
  email: string;
}
