import { bot } from '@/components/bot';
import { CallbackQueryMethod } from '@/types/callback-query-method';

interface BotError {
  error?: Error;
  message?: string;
}

export const onError = async (chatId: number, botError?: BotError) => {
  if (botError?.error) console.error(botError.error);

  await bot.sendMessage(
    chatId,
    botError?.message ?? 'В данный момент ведутся работы. Приносим свои извинения, мы скоро вернемся!',
    {
      reply_markup: {
        inline_keyboard: [
          [
            {
              text: 'Пропустить',
              callback_data: JSON.stringify({ method: CallbackQueryMethod.SKIP }),
            },
          ],
        ],
      },
    },
  );
};
