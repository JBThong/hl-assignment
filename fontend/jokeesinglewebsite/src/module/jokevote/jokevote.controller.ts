import { Controller, Post, Body } from '@nestjs/common';
import { JokevoteService } from './jokevote.service';
import { JokeVoteDto } from './dto/jokevote.dto';
import { JokeVote as JokeVoteEntity } from './jokevote.entity'

@Controller('jokevote')
export class JokevoteController {
    constructor(private readonly jokeVoteService: JokevoteService) { }

    @Post()
    async create(@Body() jokeVote): Promise<JokeVoteEntity> {
        // create a new post and return the newly created post
        return await this.jokeVoteService.create(jokeVote);
    }
}
