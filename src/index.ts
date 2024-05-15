import '@dotenvx/dotenvx';

import { bot } from '@/components/bot';
import { COMMANDS } from '@/components/handlers/constants';
import { startGrpcServer } from '@/components/grpc-server';
import { onSendTXCommand, onWalletConnect } from '@/components/ton-connect/command-handlers';
import { onCommandStart } from '@/components/handlers/start';
import { onMessage } from '@/components/handlers/message';
import { onCallbackQuery } from '@/components/handlers/callback-query';
import { onLinkCommand } from '@/components/handlers/link';

// Start gRPC server
startGrpcServer();

// Start command
bot.onText(/\/start/, onCommandStart);

// Wallet connect command
bot.onText(/\/link/, onLinkCommand);

// Wallet connect command
bot.onText(/\/connect/, onWalletConnect);

// Send transaction command
bot.onText(/\/send/, onSendTXCommand);

// Comment this to test wallet connection and transaction sending
bot.on('message', async (msg) => {
  if (Object.values(COMMANDS).some((command) => command.test(msg.text || '') || command.test(msg.caption || '')))
    return;
  await onMessage(msg);
});

// Callback query (inline keyboard)
bot.on('callback_query', onCallbackQuery);
