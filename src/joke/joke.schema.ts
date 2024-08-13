import { Schema, Document } from "mongoose";

export interface ModeratedJoke extends Document {
    joke : string;
    type : string;
} 

export const ModeratedJokeSchema = new Schema ({
    joke : { type: String, required: true },
    type : { type: String, required: true }
})