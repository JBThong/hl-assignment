import { JokeVote } from './jokevote.entity';
import { JOKE_VOTE_REPOSITORY } from '../../configuration/constants/index';

export const jokeVoteProviders = [
    {
        provide: JOKE_VOTE_REPOSITORY,
        useValue: JokeVote,
    },
];