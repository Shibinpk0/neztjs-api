import { Test, TestingModule } from '@nestjs/testing';
import { EmployeController } from './employe.controller.js';

describe('EmployeController', () => {
  let controller: EmployeController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [EmployeController],
    }).compile();

    controller = module.get<EmployeController>(EmployeController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
