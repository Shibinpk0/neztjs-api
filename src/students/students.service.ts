// import { Injectable } from '@nestjs/common';
// import { ConfigService } from '@nestjs/config';

// @Injectable()
// export class StudentService {
//   constructor(private configService: ConfigService) {}
//   private students = [
//     {
//       id: 1,
//       name: 'shibin',
//       course: 'react',
//       age: 22,
//     },
//     {
//       id: 2,
//       name: 'abc',
//       course: 'react',
//       age: 21,
//     },
//   ];

//   getAllStudents() {
//     return this.students;
//   }
//   getStudentbyId(id: number) {
//     return this.students.find((s) => s.id === id);
//   }
//   createStudent(name: string, course: string) {
//     const student = {
//       id: this.students.length + 1,
//       name: name,
//       course: course,
//       age: 0,
//     };
//     this.students.push(student);
//     return student;
//   }

//   getMaxVar() {
//     return this.configService.get<string>('MAX_VAR');
//   }
// }

import { Injectable, NotFoundException } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { CreateStudentDto } from './dto/createStudent.dto.js';
import { SearchStudentDto } from './dto/searchStudent.dto.js';

@Injectable()
export class StudentService {
  constructor(private configService: ConfigService) {}

  private students = [
    {
      id: 1,
      name: 'shibin',
      email: 'shibin@gmail.com',
      course: 'react',
      age: 22,
      teacherName: 'John',
      active: true,
    },
    {
      id: 2,
      name: 'abc',
      email: 'abc@gmail.com',
      course: 'node',
      age: 21,
      teacherName: 'David',
      active: false,
    },
    {
      id: 3,
      name: 'Rahul',
      email: 'rahul@gmail.com',
      course: 'react',
      age: 24,
      teacherName: 'John',
      active: true,
    },
  ];

  getAllStudents() {
    return this.students;
  }

  // getStudentbyId(id: number) {
  //   return this.students.find((s) => s.id === id);
  // }

  getStudentbyId(id: number) {
    const student = this.students.find((s) => s.id === id);

    if (!student) {
      throw new NotFoundException('Student not found');
    }

    return student;
  }

  createStudent(studentData: CreateStudentDto) {
    const student = {
      id: this.students.length + 1,
      ...studentData,
      teacherName: studentData.teacherName ?? '',
      active: studentData.active ?? true,
    };

    this.students.push(student);

    return student;
  }

  searchStudents(filters: SearchStudentDto) {
    return this.students.filter((student) => {
      return (
        (!filters.teacherName ||
          student.teacherName
            .toLowerCase()
            .includes(filters.teacherName.toLowerCase())) &&
        (!filters.course ||
          student.course
            .toLowerCase()
            .includes(filters.course.toLowerCase())) &&
        (filters.age === undefined || student.age === filters.age) &&
        (filters.active === undefined || student.active === filters.active)
      );
    });
  }

  getMaxVar() {
    return this.configService.get<string>('MAX_VAR');
  }
}
