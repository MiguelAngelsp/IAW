import { Test, TestingModule } from '@nestjs/testing';
import { CestaController } from './cesta.controller';

describe('CestaController', () => {
  let controller: CestaController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CestaController],
    }).compile();

    controller = module.get<CestaController>(CestaController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
