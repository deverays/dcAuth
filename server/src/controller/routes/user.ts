type Request = import("express").Request;
type Response = import("express").Response;
type User = import("../../types/user").User;

import { getAccessToken, getUserInfo } from "../../services/apiServices";

import { UserModel } from "../../models/users";
import { server } from "../../main";

export const webRegister = async (req: Request, res: Response) => {
    try {
        if (!req.body) return res.send({ code: 404, success: false });

        const userModel: User | any = await UserModel.findOne({
            email: req.body.email,
        });
        if (userModel) return res.send({ code: 406, success: false });

        const token = await server.tokenGenerate();
        const id = await server.idGenerate();

        await UserModel.create(
            { token },
            {
                $set: {
                    "web.email": req.body.email,
                    "web.password": req.body.password,
                    "web.name": req.body.name,
                    "web.surname": req.body.surname,
                    "web.id": id,
                },
            },
            { upsert: true }
        ).then(() => {
            res.send({ code: 201, success: true });
        });
    } catch (err) {
        return server.console("reject", "routes/user err: register");
    }
};

export const webLogin = async (req: Request, res: Response) => {
    try {
        if (!req.body) return res.send({ code: 404, success: false });

        const userModel: User | any = await UserModel.findOne({
            "web.email": req.body.email,
        });
        if (!userModel) return res.send({ code: 406, success: false });

        if (userModel.web.password !== req.body.password)
            return res.send({ code: 401, success: false });

        res.send({
            code: 101,
            success: false,
            token: userModel.token,
            id: userModel.web.id,
        });
    } catch (err) {
        return server.console("reject", "routes/user err: login");
    }
};

export const webGetUser = async (req: Request, res: Response) => {
    try {
        const body = req.body;
        if (!body || !body?.token) return res.send({ code: 506, success: false });

        const userModel: User | null = await UserModel.findOne({
            token: body.token,
        });

        if (!userModel) return res.send({ code: 506, success: false });

        res.send({ code: 101, success: true, data: userModel.web });
    } catch (err) {
        return;
    }
};

export const dcGetUser = async (req: Request, res: Response) => {
    try {
        const body = req.body;
        if (!body || !body?.token) return res.send({ code: 506, success: false });

        const userModel: User | null = await UserModel.findOne({
            token: body.token,
        });

        const userInfo = await getUserInfo(
            userModel?.dc?.access_token as string
        ).catch((e) => e);

        res.send({ code: 101, success: true, data: userInfo.data });
    } catch (err) {
        return;
    }
};

export const dcSaveAccessToken = async (req: Request, res: Response) => {
    try {
        const code = req.body.code;
        const token = req.body.token;
        if (!code || !token) return res.send({ code: 406, success: false });

        const response = await getAccessToken(code);

        if (!response?.status || !response.data?.access_token)
            return res
                .status(500)
                .json({ success: false, message: "Internal server error" });

        await UserModel.findOneAndUpdate(
            { token },
            {
                $set: {
                    "dc.access_token": response.data.access_token,
                    "dc.connection": true,
                },
            },
            { upsert: true }
        ).then(() => {
            res.json({ code: 101, success: true });
        });
    } catch (err) {
        return;
    }
};
