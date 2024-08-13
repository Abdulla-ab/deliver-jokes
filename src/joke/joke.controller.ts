import { Controller, Get, Query } from "@nestjs/common";
import { JokeService } from "./joke.service";

@Controller('jokes')
export class JokeController {
    constructor(private readonly jokeService: JokeService) {}

    @Get('joke')
    getJoke(@Query('type') type: string) {
        return this.jokeService.getJokeByType(type);
    }

    @Get('types')
    getJokeTypes() {
        return this.jokeService.getJokeTypes();
    }
}