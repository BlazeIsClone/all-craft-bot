import { Bot } from "../../bot.ts";
import { configs } from "../../configs.ts";

export let updateApplicationCommands = async () => {
    await Bot.helpers.upsertApplicationCommands(
        Bot.commands
            // ONLY GLOBAL COMMANDS
            .filter((command) => !command.devOnly)
            .array()
    );

    await Bot.helpers.upsertApplicationCommands(
        Bot.commands
            // ONLY GLOBAL COMMANDS
            .filter((command) => !!command.devOnly)
            .array(),
        configs.devGuildId
    );
};
