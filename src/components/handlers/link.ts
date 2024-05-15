import type TelegramBot from 'node-telegram-bot-api';

import { bot } from '@/components/bot';
import { grpcUserService } from '@/services';
import { onError } from '@/components/handlers/error';

export const onLinkCommand = async (msg: TelegramBot.Message) => {
  const chatId = msg.chat.id;

  try {
    const response = await grpcUserService.generateReferralLink(chatId);

    if (response instanceof Error) return onError(chatId, response);

    const referralLink = response.getReferalLink();

    await bot.sendMessage(msg.chat.id, `Ваша реферальная ссылка:\n${referralLink}`);
  } catch (e) {
    await onError(chatId, e);
  }
};
