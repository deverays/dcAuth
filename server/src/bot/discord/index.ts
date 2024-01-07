type Client = import("discord.js").Client;
import { server } from "../../main";

export default (client: Client) => {
    client?.once("ready", () => {
        server.console(
            "success",
            `Discord bot named ${client.user?.username}#${client.user?.discriminator} worked successfully`
        );
    });
};
