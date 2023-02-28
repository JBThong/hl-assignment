import { Injectable, Inject } from '@nestjs/common';
import { JOKE_REPOSITORY, SAMPLE_JOKES } from '../../configuration/constants/index';
import { Joke as JokeEntity } from './joke.entity';
import { JokeDto } from './dto/joke.dto';


@Injectable()
export class JokeService {

    constructor(
        @Inject(JOKE_REPOSITORY) private jokeRepository: typeof JokeEntity,
        ) {
            this.initJokeList();
        };

    /**
     * Create new joke.
     * @param {Object} joke An JokeDTO object.
     * @returns {Promise} Promise<JokeEntity>.
     */
    async create(joke: JokeDto) {
        return await this.jokeRepository.create<JokeEntity>({ ...joke });
    }

    /**
     * Get all joke list from database.
     */
    async findAll(): Promise<JokeEntity[]> {
        return await this.jokeRepository.findAll<JokeEntity>({raw: true});
    }

    /**
     * Init Joke list if empty database.
     */
    async initJokeList() {
        let jokeList: any = [] 
        jokeList = await this.findAll().then(data => {
            return data;
        }).catch(error => console.log(error))
        
        if (Array.isArray(jokeList) && jokeList.length === 0) {
            SAMPLE_JOKES.forEach(async (item) => {
                let joke = new JokeDto();
                joke.content = item;
                try {
                    let newJoke = this.create(joke).then(newJoke => {
                        return newJoke;
                    });
                    jokeList.push(newJoke);
                } catch (e) {
                    console.log(e)
                };
            })
        }
    }
}
