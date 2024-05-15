import type TelegramBot from 'node-telegram-bot-api';

import { withLoading } from '@/components/helpers/with-loading';
import { onError } from '@/components/handlers/error';
import { onUserReply, onUserReplyVoice } from '@/components/handlers/user-reply';

export const onMessage = async (msg: TelegramBot.Message) => {
  const chatId = msg.chat.id;

  try {
    await withLoading(chatId, async () => {
      if (msg.voice) return await onUserReplyVoice(chatId, msg.voice);
      if (msg.text) return await onUserReply(chatId, msg.text);
    });
  } catch (error) {
    console.error(error);

    try {
      await onError(chatId);
    } catch (e) {
      console.error(e);
    }
  }
};
