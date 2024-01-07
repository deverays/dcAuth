import axios from "axios";

const data = {
    client_secret: "",
    client_id: "",
    token:
        "",
    redirect_uri: "http://localhost:5173/dc/connection",
};

const getAccessToken = (code: string) => {
    return axios({
        method: "post",
        url: "https://discord.com/api/oauth2/token",
        data: {
            client_id: data.client_id,
            client_secret: data.client_secret,
            grant_type: "authorization_code",
            code,
            redirect_uri: data.redirect_uri,
        },
        headers: {
            "Content-Type": "application/x-www-form-urlencoded",
        },
    });
};

const getUserGuilds = (token: string) => {
    return axios("https://discord.com/api/users/@me/guilds", {
        headers: { authorization: token },
    });
};

const getBotGuilds = () => {
    return axios("https://discord.com/api/users/@me/guilds", {
        headers: { authorization: `Bot ${data.token}` },
    });
};

const getUserInfo = async (token: string) => {
    return await axios("https://discord.com/api/users/@me", {
        headers: { authorization: `Bearer ${token}` },
    });
};

export { getAccessToken, getUserGuilds, getBotGuilds, getUserInfo };
