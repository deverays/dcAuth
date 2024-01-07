type User = import("../../../types/user").User;

import { UserModel } from "../../../models/users";

function generateRandomToken(length: number): string {
    const characters =
        "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let token = "";

    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        token += characters.charAt(randomIndex);
    }

    return token;
}

export default async () => {
    let tokenStatus = false;

    do {
        const userModels = await UserModel.find();
        const token = generateRandomToken(32);

        if (userModels.some((model: User) => model?.token == token))
            return (tokenStatus = false);
        else tokenStatus = true;

        return token;
    } while (!tokenStatus);
};
