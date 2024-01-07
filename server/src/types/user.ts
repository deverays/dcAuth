import { Document } from "mongoose";

export type User = Document & {
    token: string;
    web: {
        name: string;
        surname: string;
        email: string;
        password: string;
        id: string;
    };
    dc: {
        connection: boolean;
        access_token: string;
    };
};
