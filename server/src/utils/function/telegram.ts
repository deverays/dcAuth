import TelegramBot from "node-telegram-bot-api";

interface TelegramOptions {
    token: string;
}

export default (options: TelegramOptions) => {
    return new TelegramBot(options.token, { polling: true });
};
