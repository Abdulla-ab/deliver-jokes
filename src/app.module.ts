import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { ModeratedJokeModule } from './joke/joke.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    MongooseModule.forRoot(`mongodb+srv://${process.env.DATABASE_USERNAME}:${process.env.DATABASE_PWD}@${process.env.DATABASE_CLUSTER}.rcohl.mongodb.net/${process.env.MODERATOR_DATABSE_NAME}?retryWrites=true&w=majority`),
    ModeratedJokeModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
