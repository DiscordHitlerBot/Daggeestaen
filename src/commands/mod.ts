import { Bot, Collection } from 'discordeno';
import { config } from '../config.ts';
import { Command } from '../types.ts';

import ping from './info/ping.ts';

export const commands: Collection<string, Command> = new Collection();

export function setupCommands(bot: Bot) {
  commands.set(ping.name, ping);

  bot.helpers.upsertGlobalApplicationCommands(commands.filter((c) => !c.devServerOnly).array());
  bot.helpers.upsertGuildApplicationCommands(
    config.devGuildId,
    commands.filter((c) => !!c.devServerOnly).array(),
  );
}
