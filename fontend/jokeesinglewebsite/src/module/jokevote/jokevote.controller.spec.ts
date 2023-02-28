import { Test, TestingModule } from '@nestjs/testing';
import { JokevoteController } from './jokevote.controller';

describe('JokevoteController', () => {
  let controller: JokevoteController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [JokevoteController],
    }).compile();

    controller = module.get<JokevoteController>(JokevoteController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
