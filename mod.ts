import { BOT_TOKEN } from "./configs.ts";
import { SimpleClient } from "./deps.ts";

const client = new SimpleClient({
    token: BOT_TOKEN,
    intents: ["Guilds", "GuildMessages", "DirectMessages"],
});

client.eventHandlers.ready = () => {
    console.log("Successfuly logged in!");
};

client.eventHandlers.messageCreate = (message) => {
    if (message.content.startsWith("ping ")) return message.send("deno");
};

client.start();
