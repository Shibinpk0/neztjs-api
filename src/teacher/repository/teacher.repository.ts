// // import { Injectable } from '@nestjs/common';

// // @Injectable()
// // export class TeacherRepository {
// //   private teachers = [
// //     {
// //       id: 1,
// //       name: 'shibin sir',
// //       course: 'react',
// //     },
// //     {
// //       id: 2,
// //       name: 'abc mdm',
// //       course: 'react',
// //     },
// //   ];

// //   findAll() {
// //     return this.teachers;
// //   }

// //   findById(id: number) {
// //     return this.teachers.find((t) => t.id === id);
// //   }

// //   findByCourse(course?: string) {
// //     return this.teachers.filter((t) => t.course === course);
// //   }

// //   create(name: string, course: string) {
// //     const teacher = {
// //       id: this.teachers.length + 1,
// //       name,
// //       course,
// //     };

// //     this.teachers.push(teacher);
// //     return teacher;
// //   }
// // }
// import { Injectable } from '@nestjs/common';
// import { SearchStudentDto } from '../../students/dto/searchStudent.dto.js';

// @Injectable()
// export class TeacherRepository {
//   private teachers = [
//     {
//       id: 1,
//       name: 'shibin sir',
//       course: 'react',
//       age: 22,
//       active: true,
//     },
//     {
//       id: 2,
//       name: 'abc mdm',
//       course: 'react',
//       age: 25,
//       active: false,
//     },
//     {
//       id: 3,
//       name: 'john sir',
//       course: 'nestjs',
//       age: 30,
//       active: true,
//     },
//     {
//       id: 4,
//       name: 'arun sir',
//       course: 'node',
//       age: 28,
//       active: false,
//     },
//     {
//       id: 5,
//       name: 'rahul sir',
//       course: 'nestjs',
//       age: 35,
//       active: true,
//     },
//   ];

//   findAll() {
//     return this.teachers;
//   }

//   findById(id: number) {
//     return this.teachers.find((t) => t.id === id);
//   }

//   findByCourse(course?: string) {
//     return this.teachers.filter(
//       (t) => t.course.toLowerCase() === course?.toLowerCase(),
//     );
//   }

//   create(
//     name: string,
//     course: string,
//     age: number,
//     active: boolean,
//     address: { city: string; pincode: string },
//   ) {
//     const teacher = {
//       id: this.teachers.length + 1,
//       name,
//       course,
//       age,
//       active,
//       address,
//     };

//     this.teachers.push(teacher);

//     return teacher;
//   }

//   search(filters: {
//     teacherName?: string;
//     course?: string;
//     minAge?: number;
//     active?: boolean;
//     page?: number;
//     limit?: number;
//   }) {
//     // STEP 1: Filtering

//     const filteredTeachers = this.teachers.filter((teacher) => {
//       return (
//         (!filters.teacherName ||
//           teacher.name
//             .toLowerCase()
//             .includes(filters.teacherName.toLowerCase())) &&
//         (!filters.course ||
//           teacher.course.toLowerCase() === filters.course.toLowerCase()) &&
//         (filters.minAge === undefined || teacher.age >= filters.minAge) &&
//         (filters.active === undefined || teacher.active === filters.active)
//       );
//     });

//     // STEP 2: Pagination

//     const page = filters.page ?? 1;
//     const limit = filters.limit ?? 10;

//     const startIndex = (page - 1) * limit;

//     const data = filteredTeachers.slice(startIndex, startIndex + limit);

//     // STEP 3: Response

//     return {
//       data,
//       meta: {
//         total: filteredTeachers.length,
//         page,
//         limit,
//         totalPages: Math.ceil(filteredTeachers.length / limit),
//       },
//     };
//   }
// }

// searchTeacher(query:SearchTeacherDto)

// const {name,curse,minage,active,page=1}=queryObjects;
// let filtered=[...this.teacher];
// if(name){
//   filtered=filtered.filter(s=>s.name.toLowerCase().include(name));
// }
// if(course){
//   filtered=filtered.filter(s=>s.name.toLowerCase()===course);
// }

import { Injectable } from '@nestjs/common';
import { SearchTeacherDto } from '../dto/searchteacher.dto.js';

@Injectable()
export class TeacherRepository {
  private teachers = [
    {
      id: 1,
      name: 'shibin sir',
      course: 'react',
      age: 22,
      active: true,
      email: 'shibin12@gmail.com',
    },
    {
      id: 2,
      name: 'abc mdm',
      course: 'react',
      age: 25,
      active: false,
      email: 'abc@gmail.com',
    },
    {
      id: 3,
      name: 'john sir',
      course: 'nestjs',
      age: 30,
      active: true,
      email: 'john@gmail.com',
    },
    {
      id: 4,
      name: 'arun sir',
      course: 'node',
      age: 28,
      active: false,
      email: 'arun@gmail.com',
    },
    {
      id: 5,
      name: 'rahul sir',
      course: 'nestjs',
      age: 35,
      active: true,
      email: 'rahul@gmail.com',
    },
  ];

  // Get all teachers
  findAll() {
    return this.teachers;
  }

  // Get teacher by ID
  findById(id: number) {
    return this.teachers.find((t) => t.id === id);
  }

  // Get teacher by course
  findByCourse(course?: string) {
    return this.teachers.filter(
      (t) => t.course.toLowerCase() === course?.toLowerCase(),
    );
  }

  findByEmail(email: string) {
    return this.teachers.find((t) => t.email.toLowerCase() === email);
  }
  // Create teacher
  create(
    name: string,
    course: string,
    age: number,
    active: boolean,
    address: { city: string; pincode: string },
    email: string,
  ) {
    const teacher = {
      id: this.teachers.length + 1,
      name,
      course,
      age,
      active,
      address,
      email,
    };

    this.teachers.push(teacher);

    return teacher;
  }

  // Search, filter and pagination
  searchTeacher(query: SearchTeacherDto) {
    const { teacherName, course, minAge, active, page = 1 } = query;

    let filtered = [...this.teachers];

    // Search by teacher name
    if (teacherName) {
      filtered = filtered.filter((t) =>
        t.name.toLowerCase().includes(teacherName.toLowerCase()),
      );
    }

    // Filter by course
    if (course) {
      filtered = filtered.filter(
        (t) => t.course.toLowerCase() === course.toLowerCase(),
      );
    }

    // Filter by minimum age
    if (minAge !== undefined) {
      filtered = filtered.filter((t) => t.age >= minAge);
    }

    // Filter by active status
    if (active !== undefined) {
      filtered = filtered.filter((t) => t.active === active);
    }

    const total = filtered.length;
    const limit = 2;

    const startIndex = (page - 1) * limit;

    filtered = filtered.slice(startIndex, startIndex + limit);

    return {
      data: filtered,
      meta: {
        total,
        page,
        totalPages: Math.ceil(total / limit),
      },
    };
  }
}
