import { Bot, CreateSlashApplicationCommand, Interaction } from 'discordeno';

export enum Category {
  INFO,
  MODERATION,
  RANKING,
  MUSIC,
  UTILITY,
}

export type Command = CreateSlashApplicationCommand & {
  category?: Category;

  devServerOnly?: boolean;
  execute: (bot: Bot, interaction: Interaction) => unknown;
};
