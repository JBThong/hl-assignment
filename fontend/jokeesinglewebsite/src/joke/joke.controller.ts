import { Controller, Get, Render, Query } from '@nestjs/common';
import { JokeService } from './joke.service';

@Controller('joke')
export class JokeController {
    constructor(private readonly jokeService: JokeService) { }

    @Get()
    @Render('joke')
    async renderJokeContent() {
        try {
            return {
                    statusCode: 200,
                    msg: null,
                    data: null 
                };
        }
        catch (err) {
            return {
                    statusCode: 400,
                    msg: err
                }
        }
    }

    @Get('jokelist')
    async getJokeList() {
        try {
            let jokeList = await this.jokeService.findAll();
            return {
                    statusCode: 200,
                    msg: null,
                    data: jokeList 
                };
        }
        catch (err) {
            return {
                    statusCode: 400,
                    msg: err
                }
        }
    }
}
