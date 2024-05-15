import type TelegramBot from 'node-telegram-bot-api';
import { UserRejectsError } from '@tonconnect/sdk';
import QRCode from 'qrcode';

import { CallbackQueryMethod } from '@/types/callback-query-method';
import { getWalletInfo, getWallets } from '@/components/ton-connect/wallets';
import { getConnector } from '@/components/ton-connect/connector';
import { bot } from '@/components/bot';
import { CONFIG } from '@/config';

export const onWalletConnect = async (msg: TelegramBot.Message) => {
  const chatId = msg.chat.id;

  const wallets = await getWallets();

  const connector = getConnector(chatId);

  connector.onStatusChange(async (wallet) => {
    if (wallet) {
      const walletName = (await getWalletInfo(wallet.device.appName))?.name || wallet.device.appName;
      bot.sendMessage(chatId, `${walletName} wallet connected!`);
    }
  });

  const link = connector.connect(wallets);
  const image = await QRCode.toBuffer(link);

  await bot.sendPhoto(chatId, image, {
    reply_markup: {
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
  });

  return;
};

export const onSendTXCommand = async (msg: TelegramBot.Message): Promise<void> => {
  const chatId = msg.chat.id;

  const connector = getConnector(chatId);

  await connector.restoreConnection();
  if (!connector.connected || !connector.wallet) {
    await bot.sendMessage(chatId, 'Connect wallet to send transaction');
    return;
  }

  connector
    .sendTransaction({
      validUntil: Math.round(Date.now() / 1000) + 600, // timeout is SECONDS
      messages: [
        {
          amount: '1000000',
          address: CONFIG.TX_ADDRESS,
        },
      ],
    })
    .then(async (response) => {
      console.log('>>>', response);
      await bot.sendMessage(chatId, 'Transaction sent successfully');
      await bot.sendMessage(chatId, JSON.stringify(response));
    })
    .catch((e) => {
      if (e instanceof UserRejectsError) {
        bot.sendMessage(chatId, 'You rejected the transaction');
        return;
      }

      bot.sendMessage(chatId, 'Unknown error happened');
    })
    .finally(() => connector.pauseConnection());

  let deeplink = '';

  const walletInfo = await getWalletInfo(connector.wallet.device.appName);
  if (walletInfo && 'universalLink' in walletInfo) {
    deeplink = walletInfo.universalLink;
  }

  await bot.sendMessage(chatId, `Open ${walletInfo?.name || connector.wallet.device.appName} and confirm transaction`, {
    reply_markup: {
      inline_keyboard: [
        [
          {
            text: 'Open Wallet',
            url: deeplink,
          },
        ],
      ],
    },
  });
};
