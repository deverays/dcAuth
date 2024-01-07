type Router = import("express").Router;

import {
    webGetUser,
    webRegister,
    webLogin,
    dcSaveAccessToken,
    dcGetUser,
} from "./routes/user";

export default (router: Router) => {
    router.post("/web/getUser", webGetUser);
    router.post("/web/register", webRegister);
    router.post("/web/login", webLogin);

    router.post("/dc/getUser", dcGetUser);
    router.post("/dc/saveAccessToken", dcSaveAccessToken);
};
