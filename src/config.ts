import { parseEnv } from 'znv';
import { z } from 'zod';

export const CONFIG = parseEnv(process.env, {
  TELEGRAM_BOT_TOKEN: z.string(),
  SERVER_URL: z.string(),
  GRPC_PORT: z.string(),
  WEB_APP_URL: z.string(),
  MANIFEST_URL: z.string(),
  TX_ADDRESS: z.string(),
  GRPC_SERVER_HOST: z.string(),
  GRPC_SERVER_PORT: z.string(),
});
