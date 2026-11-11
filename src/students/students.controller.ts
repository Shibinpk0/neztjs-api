// import {
//   Body,
//   Controller,
//   DefaultValuePipe,
//   Get,
//   Param,
//   ParseBoolPipe,
//   ParseIntPipe,
//   Post,
//   Query,
// } from '@nestjs/common';
// import { StudentService } from './students.service.js';
// import { SearchStudentDto } from './dto/createStudent.dto.js';

// @Controller('students')
// export class StudentsController {
//   constructor(private readonly studentService: StudentService) {}
//   @Get()
//   getStudents() {
//     return this.studentService.getAllStudents();
//     // return [
//     //   {
//     //     id: 1,
//     //     name: 'shibin',
//     //     course: 'react',
//     //   },
//     //   {
//     //     id: 2,
//     //     name: 'abc',
//     //     course: 'react',
//     //   },
//     // ];
//   }

//   @Get('filter')
//   getStudentByStatus(@Query('active', ParseBoolPipe) active: boolean) {
//     return {
//       activeStatus: active,
//     };
//   }

//   @Get('config')
//   getConfig() {
//     return this.studentService.getMaxVar();
//   }

//   @Get('Pagination')
//   getPageStudents(
//     @Query('page', new DefaultValuePipe(1), ParseIntPipe)
//     page: number,
//   ) {
//     return {
//       currentPage: page,
//     };
//   }

//   @Get('search')
//   searchStudents(@Query() filters: SearchStudentDto) {
//     return this.studentService.searchStudents(filters);
//   }

//   @Get(':id')
//   getStudentById(@Param('id', ParseIntPipe) id: number) {
//     return this.studentService.getStudentbyId(id);
//     //  {
//     //   message: 'student details succesfull',
//     //   studentId: id,
//     // };
//   }

//   // @Post()
//   // createStudent(@Body() student: createStudentDto) {
//   //   return this.studentService.createStudent(student.name, student.course);
//   //   // {
//   //   //   message: 'hello',
//   //   //   student: student,
//   //   // };
//   // }
//   @Post()
//   createStudent(@Body() student: createStudentDto) {
//     console.log('BODY:', student);

//     return this.studentService.createStudent(student.name, student.course);
//   }
// }

import {
  Body,
  Controller,
  DefaultValuePipe,
  Get,
  Param,
  ParseBoolPipe,
  ParseIntPipe,
  Post,
  Query,
} from '@nestjs/common';

import { StudentService } from './students.service.js';
import { CreateStudentDto } from './dto/createStudent.dto.js';
import { SearchStudentDto } from './dto/searchStudent.dto.js';

@Controller('students')
export class StudentsController {
  constructor(private readonly studentService: StudentService) {}

  // GET all students
  @Get()
  getStudents() {
    return this.studentService.getAllStudents();
  }

  // GET students by active status
  @Get('filter')
  getStudentByStatus(@Query('active', ParseBoolPipe) active: boolean) {
    return {
      activeStatus: active,
    };
  }

  // GET configuration
  @Get('config')
  getConfig() {
    return this.studentService.getMaxVar();
  }

  // GET pagination
  @Get('Pagination')
  getPageStudents(
    @Query('page', new DefaultValuePipe(1), ParseIntPipe)
    page: number,
  ) {
    return {
      currentPage: page,
    };
  }

  // GET search students using multiple filters
  @Get('search')
  searchStudents(@Query() filters: SearchStudentDto) {
    return this.studentService.searchStudents(filters);
  }

  // GET student by ID
  @Get(':id')
  getStudentById(@Param('id', ParseIntPipe) id: number) {
    return this.studentService.getStudentbyId(id);
  }

  // POST create student
  @Post()
  createStudent(@Body() student: CreateStudentDto) {
    console.log('BODY:', student);

    return this.studentService.createStudent(student);
  }
}
