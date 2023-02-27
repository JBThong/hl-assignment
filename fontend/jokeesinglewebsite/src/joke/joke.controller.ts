import { Controller, Get, Render, Query } from '@nestjs/common';

@Controller('joke')
export class JokeController {

    @Get()
    @Render('joke')
    renderJokeContent() {
        return {
            jokecontent: "hello Zens"
        }
    }
}
