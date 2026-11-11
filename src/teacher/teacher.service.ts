// import { Injectable } from '@nestjs/common';

// import { TeacherRepository } from './repository/teacher.repository.js';
// import { SearchTeacherDto } from './dto/searchteacher.dto.js';

// @Injectable()
// export class TeacherService {
//   constructor(private teacherRepository: TeacherRepository) {}

//   getAllTeacher(filters: SearchTeacherDto) {
//     return this.teacherRepository.search(filters);
//   }

//   getTeacherId(id: number) {
//     return this.teacherRepository.findById(id);
//   }

//   getTeacherCourse(course?: string) {
//     return this.teacherRepository.findByCourse(course);
//   }

//   createTeacher(
//     name: string,
//     course: string,
//     age: number,
//     active: boolean,
//     address: { city: string; pincode: string },
//   ) {
//     return this.teacherRepository.create(name, course, age, active, address);
//   }
// }

import { Injectable } from '@nestjs/common';
import { TeacherRepository } from './repository/teacher.repository.js';
import { SearchTeacherDto } from './dto/searchteacher.dto.js';
@Injectable()
export class TeacherService {
  constructor(private teacherRepository: TeacherRepository) {}

  // getAllTeacher() {
  //   return this.teacherRepository.findAll();
  // }

  getAllTeacher(filters: SearchTeacherDto) {
    return this.teacherRepository.searchTeacher(filters);
  }
  getTeacherId(id: number) {
    return this.teacherRepository.findById(id);
  }

  getTeacherCourse(course?: string) {
    return this.teacherRepository.findByCourse(course);
  }

  getTeacherByEmail(email: string) {
    return this.teacherRepository.findByEmail(email);
  }

  createTeacher(
    name: string,
    course: string,
    age: number,
    active: boolean,
    address: { city: string; pincode: string },
    email: string,
  ) {
    return this.teacherRepository.create(
      name,
      course,
      age,
      active,
      address,
      email,
    );
  }

  searchTeacher(query: SearchTeacherDto) {
    return this.teacherRepository.searchTeacher(query);
  }
}
