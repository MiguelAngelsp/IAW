import { Test, TestingModule } from '@nestjs/testing';
import { cestaService } from './cesta.service';

describe('CestaService', () => {
  let service: cestaService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [cestaService],
    }).compile();

    service = module.get<cestaService>(cestaService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
