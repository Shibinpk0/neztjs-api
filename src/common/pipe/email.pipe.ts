import { BadRequestException, Injectable, PipeTransform } from '@nestjs/common';
import { isEmail } from 'class-validator';

@Injectable()
export class EmailPipe implements PipeTransform {
  transform(value: any) {
    if (typeof value !== 'string') {
      throw new BadRequestException('Email must be a string');
    }

    // Convert email to lowercase
    const email = value.trim().toLowerCase();

    // Validate email format
    if (!isEmail(email)) {
      throw new BadRequestException('Invalid email format');
    }

    return email;
  }
}
