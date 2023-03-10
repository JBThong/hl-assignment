import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { JokeModule } from './module/joke/joke.module';
import { JokeVoteModule } from './module/jokevote/jokevote.module'
import { DatabaseModule } from './configuration/database/database.module';

@Module({
  imports: [
    JokeModule,
    DatabaseModule,
    JokeVoteModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
