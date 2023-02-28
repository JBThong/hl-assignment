import { Injectable, Inject } from '@nestjs/common';
import { JOKE_VOTE_REPOSITORY } from '../../configuration/constants/index';
import { JokeVote as JokeVoteEntity } from './jokevote.entity';
import { JokeVoteDto } from './dto/jokevote.dto';

@Injectable()
export class JokevoteService {
    constructor(
        @Inject(JOKE_VOTE_REPOSITORY) private jokeVoteRepository: typeof JokeVoteEntity,
        ) {};

    /**
     * Create new vote.
     * @param {Object} vote An JokeVoteDTO object.
     * @returns {Promise} Promise<JokeVoteEntity>.
     */
    async create(vote: JokeVoteDto) {
        return await this.jokeVoteRepository.create<JokeVoteEntity>({ ...vote });
    }

}
