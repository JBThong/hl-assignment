import { Module } from '@nestjs/common';
import { JokevoteService } from './jokevote.service';
import { jokeVoteProviders } from './jokevote.provider'
import { JokevoteController } from './jokevote.controller';

@Module({
    providers: [JokevoteService, ...jokeVoteProviders],
    controllers: [JokevoteController]
})
export class JokeVoteModule {}
