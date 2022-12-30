import { Bot } from 'discordeno';
import { interactionCreate } from './interaction.ts';

export function setupEventHandlers(bot: Bot) {
  bot.events.interactionCreate = interactionCreate;
}
