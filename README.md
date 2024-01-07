#(Telegram)[https://t.me/+LXexqlMSwqI2YjE0]
``#npm``
```
npm i
cd client/server
npm run dev
```
``#yarn``
```
yarn install
cd client/server
yarn dev
```
``server/src/main.ts``
```js
export const server = new Server({
    databaseUrl: "mongodb+srv://cluster:",
    api: {
        port: 5000,
        baseUrl: "/api",
    },
    discord: {
        token:
            "",
    },
    telegram: {
        token: "",
    },
    logger: {
        success: "#14f00c",
        reject: "#e81010",
        regular: "#d1cb0d",
    },
});
```
``server/src/services/apiServices.ts``
```js
const data = {
    client_secret: "",
    client_id: "1154072030388428923",
    token:
        "",
    redirect_uri: "http://localhost:5173/dc/connection",
};
```
``client/env``
```js
VITE_DISCORD_REDIRECT_URI = ""
VITE_API_BASE_URL = "http://localhost:5000/api"
VITE_PROJECT_TITLE = "test"
```
