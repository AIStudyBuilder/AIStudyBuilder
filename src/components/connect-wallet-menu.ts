import type TelegramBot from 'node-telegram-bot-api';
import QRCode from 'qrcode';
import * as fs from 'node:fs';

import { bot } from '@/components/bot';
import { getWalletInfo, getWallets } from '@/components/ton-connect/wallets';
import { getConnector } from '@/components/ton-connect/connector';
import { CallbackQueryMethod } from '@/types/callback-query-method';

export const onChooseWallet = async (query: TelegramBot.CallbackQuery): Promise<void> => {
  const wallets = await getWallets();

  await bot.editMessageReplyMarkup(
    {
      inline_keyboard: [
        wallets.map((wallet) => ({
          text: wallet.name,
          callback_data: JSON.stringify({ method: CallbackQueryMethod.SELECT_WALLET, data: wallet.appName }),
        })),
        [
          {
            text: '« Back',
            callback_data: JSON.stringify({ method: CallbackQueryMethod.UNIVERSAL_QR }),
          },
        ],
      ],
    },
    {
      message_id: query.message?.message_id,
      chat_id: query.message?.chat.id,
    },
  );
};

export const editQR = async (message: TelegramBot.Message, link: string): Promise<void> => {
  const fileName = `QR-code-${Math.round(Math.random() * 10000000000)}`;

  await QRCode.toFile(`./${fileName}`, link);

  await bot.editMessageMedia(
    {
      type: 'photo',
      media: `attach://${fileName}`,
    },
    {
      message_id: message?.message_id,
      chat_id: message?.chat.id,
    },
  );

  await new Promise((r) => fs.rm(`./${fileName}`, r));
};

export const onOpenUniversalQR = async (query: TelegramBot.CallbackQuery): Promise<void> => {
  const chatId = query.message?.chat.id;

  if (!chatId || !query.message) return;

  const wallets = await getWallets();

  const connector = getConnector(chatId);

  connector.onStatusChange((wallet) => {
    if (wallet) {
      bot.sendMessage(chatId, `${wallet.device.appName} wallet connected!`);
    }
  });

  const link = connector.connect(wallets);

  await editQR(query.message, link);

  await bot.editMessageReplyMarkup(
    {
      inline_keyboard: [
        [
          {
            text: 'Choose a Wallet',
            callback_data: JSON.stringify({ method: CallbackQueryMethod.CHOOSE_WALLET }),
          },
          {
            text: 'Open Link',
            url: `https://ton-connect.github.io/open-tc?connect=${encodeURIComponent(link)}`,
          },
        ],
      ],
    },
    {
      message_id: query.message?.message_id,
      chat_id: query.message?.chat.id,
    },
  );
};

export const onSelectWallet = async (query: TelegramBot.CallbackQuery, data: string): Promise<void> => {
  const chatId = query.message?.chat.id;

  if (!chatId || !query.message) return;

  const connector = getConnector(chatId);

  connector.onStatusChange((wallet) => {
    if (wallet) {
      bot.sendMessage(chatId, `${wallet.device.appName} wallet connected!`);
    }
  });

  const selectedWallet = await getWalletInfo(data);
  if (!selectedWallet || !('bridgeUrl' in selectedWallet) || !('universalLink' in selectedWallet)) return;

  const link = connector.connect({
    bridgeUrl: selectedWallet.bridgeUrl,
    universalLink: selectedWallet.universalLink,
  });

  await editQR(query.message, link);

  await bot.editMessageReplyMarkup(
    {
      inline_keyboard: [
        [
          {
            text: '« Back',
            callback_data: JSON.stringify({ method: CallbackQueryMethod.CHOOSE_WALLET }),
          },
          {
            text: `Open ${selectedWallet.name}`,
            url: link,
          },
        ],
      ],
    },
    {
      message_id: query.message?.message_id,
      chat_id: chatId,
    },
  );
};
