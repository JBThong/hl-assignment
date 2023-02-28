import { Joke } from './joke.entity';
import { JOKE_REPOSITORY } from '../configuration/constants/index';

export const jokeProviders = [
    {
        provide: JOKE_REPOSITORY,
        useValue: Joke,
    },
];