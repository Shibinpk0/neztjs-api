import { Injectable } from '@nestjs/common';

@Injectable()
export class EmployeeRepository {
  private employees = [
    {
      id: 1,
      name: 'Shibin',
      email: 'shibin@gmail.com',
      age: 22,
      address: {
        city: 'Kochi',
        pincode: '682001',
      },
    },
    {
      id: 2,
      name: 'Abc',
      email: 'abc@gmail.com',
      age: 24,
      address: {
        city: 'Calicut',
        pincode: '673001',
      },
    },
  ];

  findAll() {
    return this.employees;
  }

  findById(id: number) {
    return this.employees.find((e) => e.id === id);
  }

  create(
    name: string,
    email: string,
    age: number,
    address: { city: string; pincode: string },
  ) {
    const employee = {
      id: this.employees.length + 1,
      name,
      email,
      age,
      address,
    };

    this.employees.push(employee);

    return employee;
  }
}
