import { IsString, IsNotEmpty, Matches } from 'class-validator';

export class AddressDto {
  @IsString()
  @IsNotEmpty()
  city: string;

  @IsString()
  @Matches(/^[0-9]{6}$/, {
    message: 'Pincode must be exactly 6 digits',
  })
  pincode: string;
}
