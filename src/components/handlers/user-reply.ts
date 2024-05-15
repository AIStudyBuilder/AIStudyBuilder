import type TelegramBot from 'node-telegram-bot-api';

import { bot } from '@/components/bot';
import { grpcUserService } from '@/services';
import { checkUserResponse } from '@/components/helpers/check-user-response';
import { onError } from '@/components/handlers/error';
import { doCrossroads } from '@/components/crossroads/do-crossroads';

export const onUserReply = async (chatId: number, message: string) => {
  const hasDialog = await checkUserStateForReply(chatId);

  if (!hasDialog) return;

  const user = await checkUserResponse(grpcUserService.sendDialog(chatId, message), async (error, message) => {
    await onError(chatId, { error, message });
  });

  await doCrossroads(user, chatId);
};

export const onUserReplyVoice = async (chatId: number, voice: TelegramBot.Voice) => {
  const fileId = voice.file_id;

  if (!fileId) return;

  const hasDialog = await checkUserStateForReply(chatId);

  if (!hasDialog) return;

  const voiceFileUrl = await bot.getFileLink(fileId);

  const user = await checkUserResponse(grpcUserService.sendDialog(chatId, '', voiceFileUrl), async (error, message) => {
    await onError(chatId, { error, message });
  });

  await doCrossroads(user, chatId);
};

const checkUserStateForReply = async (chatId: number) => {
  const currentState = await checkUserResponse(grpcUserService.getUser(chatId), async (error, message) => {
    await onError(chatId, { error, message });
  });

  if (!currentState) return;

  return currentState.hasDialog();
}
