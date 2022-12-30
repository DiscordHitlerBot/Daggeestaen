import { Bot, CreateSlashApplicationCommand, Interaction } from 'discordeno';

export type Command = CreateSlashApplicationCommand & {
  devServerOnly?: boolean;
  execute: (bot: Bot, interaction: Interaction) => unknown;
};
