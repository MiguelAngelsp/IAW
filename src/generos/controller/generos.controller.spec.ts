import { Test, TestingModule } from '@nestjs/testing';
import { GenerosController } from './generos.controller';

describe('ControllerController', () => {
  let controller: GenerosController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [GenerosController],
    }).compile();

    controller = module.get<GenerosController>(GenerosController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
