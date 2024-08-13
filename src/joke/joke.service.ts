import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { ModeratedJoke } from "./joke.schema";

@Injectable()
export class JokeService {
    constructor(@InjectModel('ModeratedJoke') private moderatedJokeModel: Model<ModeratedJoke>) {}

     async getJokeByType(type: string): Promise<ModeratedJoke> {
        const jokes = await this.moderatedJokeModel.find({ type }).exec();
        if (jokes.length === 0) {
          throw new NotFoundException('No jokes found');
        }
        return jokes[Math.floor(Math.random() * jokes.length)];
    }

    async getJokeTypes(): Promise<string[]> {
        const jokes = await this.moderatedJokeModel.find().exec();
        return Array.from(new Set(jokes.map(joke => joke.type)));
    }
}