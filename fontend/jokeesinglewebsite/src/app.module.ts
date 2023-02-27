import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { JokeModule } from './joke/joke.module';

@Module({
  imports: [JokeModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
