import { Schema, model } from "mongoose";
import { User } from "../types/user";

const UserSchema: Schema<User> = new Schema({
    token: { type: String, default: null, required: false },
    web: {
        name: { type: String, default: null, required: false },
        surname: { type: String, default: null, required: false },
        email: { type: String, default: null, required: false },
        password: { type: String, default: null, required: false },
        id: { type: String, default: null, required: false },
    },
    dc: {
        connection: { type: Boolean, default: null, required: false },
        access_token: { type: String, default: null, required: false },
    },
});

export const UserModel = model("users", UserSchema);
