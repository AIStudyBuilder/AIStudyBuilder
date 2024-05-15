import type TelegramBot from 'node-telegram-bot-api';
import { zu } from 'zod_utilz';
import { z } from 'zod';

import { CallbackQueryMethod } from '@/types/callback-query-method';
import { grpcUserService } from '@/services';
import { bot } from '@/components/bot';
import { onChooseWallet, onOpenUniversalQR, onSelectWallet } from '@/components/connect-wallet-menu';
import { onError } from '@/components/handlers/error';
import { checkUserResponse } from '@/components/helpers/check-user-response';
import { doCrossroads } from '@/components/crossroads/do-crossroads';
import { withLoading } from '@/components/helpers/with-loading';

export const onCallbackQuery = async (query: TelegramBot.CallbackQuery) => {
  const chatId = query.from.id;

  if (query.data === undefined) return;

  const parseResult = zu
    .stringToJSON()
    .transform((value) =>
      z
        .object({
          method: z.nativeEnum(CallbackQueryMethod),
          data: z.string().optional(),
        })
        .safeParse(value),
    )
    .safeParse(query.data);

  if (!parseResult.success || !parseResult.data.success) return;

  const { method, data } = parseResult.data.data;

  switch (method) {
    case CallbackQueryMethod.CHOOSE_WALLET:
      return await onChooseWallet(query);
    case CallbackQueryMethod.SELECT_WALLET:
      if (!data) return;
      return await onSelectWallet(query, data);
    case CallbackQueryMethod.UNIVERSAL_QR:
      return await onOpenUniversalQR(query);
  }

  try {
    await withLoading(chatId, async () => {
      switch (method) {
        case CallbackQueryMethod.ANSWER: {
          if (!data) return;

          await grpcUserService.addButton(
            chatId,
            [(await bot.sendMessage(chatId, `Ваш ответ: ${data}`)).message_id],
            true,
          );

          const user = await checkUserResponse(grpcUserService.sendAnswer(chatId, data), async (error, message) => {
            await onError(chatId, { error, message });
          });

          await doCrossroads(user, chatId);

          return;
        }
        case CallbackQueryMethod.START: {
          const user = await checkUserResponse(
            grpcUserService.sendDialog(chatId, "Let's start"),
            async (error, message) => {
              await onError(chatId, { error, message });
            },
          );

          await doCrossroads(user, chatId);
          return;
        }
        case CallbackQueryMethod.SKIP:
          return await finish(chatId, 'Пропускаем!');
        case CallbackQueryMethod.START_DIALOG:
          return await finish(chatId, 'Приступаем к диалогу!');
        case CallbackQueryMethod.START_TEST:
          return await finish(chatId, 'Приступаем к тесту!');
        case CallbackQueryMethod.START_LESSON:
          return await finish(chatId, 'Приступаем к следующему уроку!');
        case CallbackQueryMethod.FINISH:
          return await finish(chatId, 'Закончили, ты молодец!');
      }
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

const finish = async (chatId: number, message: string) => {
  const user = await checkUserResponse(grpcUserService.next(chatId), async (error, message) => {
    await onError(chatId, { error, message });
  });

  await doCrossroads(user, chatId, message);
};
