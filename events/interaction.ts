import { Bot, Interaction, InteractionTypes } from 'discordeno';
import { commands } from '../commands/mod.ts';

export const interactionCreate = (bot: Bot, interaction: Interaction): void => {
  if (!interaction.data) return;

  if (interaction.type == InteractionTypes.ApplicationCommand) {
    console.log(
      `[ApplicationCommand] ${interaction.data.name} at #${interaction.channelId}`,
    );

    const command = commands.get(interaction.data.name);
    if (!command) {
      console.error(
        `[ApplicationCommand] ${interaction.data.name} not found!`,
      );
      return;
    }

    command.execute(bot, interaction);
  }
};
