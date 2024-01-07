type User = import("../../../types/user").User;

import { UserModel } from "../../../models/users";

function generateRandomId(length: number): string {
    const characters =
        "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let id = "";

    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        id += characters.charAt(randomIndex);
    }

    return id;
}

export default async () => {
    let idStatus = false;

    do {
        const userModels = await UserModel.find();
        const id = generateRandomId(20);

        if (userModels.some((model: User) => model?.id == id))
            return (idStatus = false);
        else idStatus = true;

        return id;
    } while (!idStatus);
};
