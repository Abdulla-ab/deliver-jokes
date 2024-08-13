import { MongooseModule } from "@nestjs/mongoose";
import { ModeratedJokeSchema } from "./joke.schema";
import { Module } from '@nestjs/common';
import { JokeService } from "./joke.service";
import { JokeController } from "./joke.controller";

@Module({
    imports: [
      MongooseModule.forFeature([{ name: 'ModeratedJoke', schema: ModeratedJokeSchema }]),
    ],
    providers: [JokeService],
    controllers: [JokeController],
  })
export class ModeratedJokeModule {}