import { Module } from '@nestjs/common';
import { JokevoteService } from './jokevote.service';
import { jokeVoteProviders } from './jokevote.provider'

@Module({
    providers: [JokevoteService, ...jokeVoteProviders]
})
export class JokeVoteModule {}
