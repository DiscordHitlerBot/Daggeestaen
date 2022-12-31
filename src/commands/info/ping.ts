import { ApplicationCommandTypes, InteractionResponseTypes } from 'discordeno';
import { Category, Command } from '../../types.ts';

function snowflakeToTimestamp(id: bigint) {
  return Number(id / 4194304n + 1420070400000n);
}

const command: Command = {
  name: 'ping',
  description: 'Ping the Bot!',
  category: Category.INFO,
  type: ApplicationCommandTypes.ChatInput,
  execute: async (Bot, interaction) => {
    const ping = Date.now() - snowflakeToTimestamp(interaction.id);
    await Bot.helpers.sendInteractionResponse(
      interaction.id,
      interaction.token,
      {
        type: InteractionResponseTypes.ChannelMessageWithSource,
        data: {
          content: `🏓 Pong! ${ping}ms`,
        },
      },
    );
  },
};

export default command;
