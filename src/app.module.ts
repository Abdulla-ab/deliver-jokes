import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { ModeratedJokeModule } from './joke/joke.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb+srv://abdullanalimm:Abu1999com@submitjokescluster.rcohl.mongodb.net/moderated-joke-app?retryWrites=true&w=majority'),
    ModeratedJokeModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
