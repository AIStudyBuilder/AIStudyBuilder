import { bot } from '@/components/bot';

export const withLoading = async <T>(chatId: number, callback: () => Promise<T>) => {
  const loadingMessageId = (await bot.sendMessage(chatId, '\u{1f4ad}')).message_id;

  await callback();
  await bot.deleteMessage(chatId, loadingMessageId);
};
