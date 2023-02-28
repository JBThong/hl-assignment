import { Module } from '@nestjs/common';
import { JokeController } from './joke.controller';
import { JokeService } from './joke.service';
import { jokeProviders } from './joke.provider';

@Module({
  controllers: [JokeController],
  providers: [JokeService, ...jokeProviders]
})
export class JokeModule {}
