import { configAsync } from 'dotenv';

const env = await configAsync({ export: true, path: './.env' });

interface Config {
  token: string;
  devGuildId: string;
}

export const config: Config = {
  token: env.BOT_TOKEN,
  devGuildId: env.DEV_GUILD_ID,
} as const;
