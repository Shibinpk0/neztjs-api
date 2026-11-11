// import { Test, TestingModule } from '@nestjs/testing';
// import { StudentService } from './students.service.js';
// import { ConfigService } from '@nestjs/config';

// describe('StudentService', () => {
//   let service: StudentService;

//   beforeEach(async () => {
//     const module: TestingModule = await Test.createTestingModule({
//       providers: [
//         StudentService,
//         {
//           provide: ConfigService,
//           useValue: {
//             get: jest.fn().mockReturnValue('100'),
//           },
//         },
//       ],
//     }).compile();

//     service = module.get<StudentService>(StudentService);
//   });

//   it('should be defined', () => {
//     expect(service).toBeDefined();
//   });

//   // Test 1: Get all students
//   it('should return all students', () => {
//     expect(service.getAllStudents()).toHaveLength(3);
//   });

//   // Test 2: Get student by ID
//   it('should return student by ID', () => {
//     expect(service.getStudentbyId(1)?.name).toBe('shibin');
//   });

//   // Test 3: Search students by course
//   it('should search students by course', () => {
//     expect(service.searchStudents({ course: 'react' })).toHaveLength(2);
//   });
// });

import { Test, TestingModule } from '@nestjs/testing';
import { StudentService } from './students.service.js';
import { ConfigService } from '@nestjs/config';

describe('StudentService', () => {
  let service: StudentService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        StudentService,
        {
          provide: ConfigService,
          useValue: { get: () => '100' },
        },
      ],
    }).compile();

    service = module.get<StudentService>(StudentService);
  });

  // Test 1: Check student by invalid ID
  it('should return undefined for invalid ID', () => {
    expect(service.getStudentbyId(100)).toBeUndefined();
  });

  // Test 2: Search students by teacher name
  it('should search students by teacher name', () => {
    const result = service.searchStudents({
      teacherName: 'John',
    });

    expect(result).toHaveLength(2);
  });

  // Test 3: Search students by age
  it('should search students by age', () => {
    const result = service.searchStudents({
      age: 22,
    });

    expect(result).toHaveLength(1);
    expect(result[0].name).toBe('shibin');
  });
});
