import {
    ApplicationCommandTypes,
    InteractionResponseTypes,
    editWebhook,
} from "../../deps.ts";
import { createCommand } from "./mod.ts";

createCommand({
    name: "role",
    description: "Self Roles",
    type: ApplicationCommandTypes.ChatInput,
    execute: async (Bot, { id, token }) => {
        await Bot.helpers.sendInteractionResponse(id, token, {
            type: InteractionResponseTypes.ChannelMessageWithSource,
            data: {
                components: [
                    {
                        type: 1,
                        components: [
                            {
                                customId: "btnBuilder",
                                type: 2,
                                label: "Builder",
                                style: 1,
                            },
                            {
                                customId: "btnMiner",
                                type: 2,
                                label: "Miner",
                                style: 1,
                            },
                            {
                                customId: "btnMerchant",
                                type: 2,
                                label: "Merchant",
                                style: 1,
                            },
                        ],
                    },
                ],
            },
        });
    },
});
