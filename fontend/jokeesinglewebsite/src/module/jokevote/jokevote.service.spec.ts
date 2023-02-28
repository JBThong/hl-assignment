import { Test, TestingModule } from '@nestjs/testing';
import { JokevoteService } from './jokevote.service';

describe('JokevoteService', () => {
  let service: JokevoteService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [JokevoteService],
    }).compile();

    service = module.get<JokevoteService>(JokevoteService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
