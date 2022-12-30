import { createBot, Intents, startBot } from 'discordeno';
import { setupCommands } from './commands/mod.ts';
import { config } from './config.ts';
import { setupEventHandlers } from './events/mod.ts';

console.log('Starting bot...');

const bot = createBot({
  token: config.token,
  intents: Intents.Guilds | Intents.GuildMessages,
  events: {
    ready: () => {
      console.log('Bot started');
    },
  },
});

setupCommands(bot);
setupEventHandlers(bot);

await startBot(bot);
