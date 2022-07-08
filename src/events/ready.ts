import { Bot } from "../../bot.ts";
import log from "../utils/logger.ts";
import { transformActivity } from "../../deps.ts";

Bot.events.ready = (_, payload) => {
    log.info(
        `[READY] Shard ID ${payload.shardId} of ${Bot.gateway.maxShards} shards is ready!`
    );

    if (payload.shardId + 1 === Bot.gateway.maxShards) {
        botFullyReady();
    }
};

// This function lets you run custom code when all your bot's shards are online.
let botFullyReady = () => {
    log.info("[READY] Bot is fully online.");

    const act: Object = {
        details: "hi",
        type: "Game",
        buttons: [
            {
                label: "Server",
                url: "blazeclone.xyz",
            },
        ],
    };
};
