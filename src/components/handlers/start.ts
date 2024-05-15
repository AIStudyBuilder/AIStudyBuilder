import type TelegramBot from 'node-telegram-bot-api';

import { grpcUserService } from '@/services';
import { checkUserResponse } from '@/components/helpers/check-user-response';
import { onError } from '@/components/handlers/error';
import { doCrossroads } from '@/components/crossroads/do-crossroads';
import { bot } from '@/components/bot';

export const onCommandStart = async (msg: TelegramBot.Message, match: RegExpExecArray | null) => {
  const referral = match?.[1];
  const chatId = msg.chat.id;

  bot.setMyCommands([{ command: 'link', description: 'Получить реферальную ссылку' }]);

  const user = await checkUserResponse(
    grpcUserService.updateUser(chatId, msg.chat.username ?? msg.chat.first_name ?? `User ${chatId}`, referral),
    async (error, message) => {
      await onError(chatId, { error, message });
    },
  );

  const hiMessage = `Привет, ${user?.getName()}\n\nДавай начнем наше путешествие! Обычно, уроки проходят следующим образом: я даю материал на изучение, затем тебе необходимо выполнить тест или пообщаться со мной в диалоге, чтобы усвоить теорию на практике!\n\nЧтобы перейти к изучению нажми "<b>Изучать</b>". Успехов!`;

  await doCrossroads(user, chatId, hiMessage);
};
