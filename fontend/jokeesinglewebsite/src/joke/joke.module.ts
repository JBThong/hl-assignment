import { Module } from '@nestjs/common';
import { JokeController } from './joke.controller';
import { JokeService } from './joke.service';

@Module({
  controllers: [JokeController],
  providers: [JokeService]
})
export class JokeModule {}
