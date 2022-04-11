import { Schema, model } from "mongoose";

export interface User {
    id: string;
    DiscordID: string;
    AccessToken: string;
    RefreshToken: string;
}

const userSchema = new Schema<User>({

    DiscordID: {
        type: String,
        required: true,
        unique: true
    },
    AccessToken: {
        type: String,
        required: true
    },
    RefreshToken: {
        type: String,
        required: true
    }

});

export default model("users", userSchema);