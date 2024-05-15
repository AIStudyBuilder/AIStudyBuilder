import type TelegramBot from 'node-telegram-bot-api';

import type { User } from '@/proto/getuser/getuser_pb';
import { grpcUserService } from '@/services';
import { bot } from '@/components/bot';
import { crossroads, type CrossroadsMessage, CrossroadsImageMessage } from '@/components/crossroads';
import { onError } from '@/components/handlers/error';

export const doCrossroads = async (user: User | undefined, chatId: number, message?: string) => {
  if (!user) return;

  const messagesToUpdate = user.getMsgtoupdateList();
  const messagesToDelete = user.getMsgtodeleteList();

  await Promise.all([grpcUserService.updateButtons(chatId, [], true), grpcUserService.updateButtons(chatId, [])]);

  if (message) {
    const sentMessage = await bot.sendMessage(chatId, message, { parse_mode: 'HTML' });
    await grpcUserService.addButton(chatId, [sentMessage.message_id], true);
  }

  const crossroadsResponse = crossroads(user);

  await sendCrossroadsMessages(chatId, crossroadsResponse, messagesToDelete, messagesToUpdate);
};

const sendCrossroadsMessages = async (
  chatId: number,
  messages: CrossroadsMessage[] | undefined,
  messagesToDelete: number[],
  messagesToUpdate: number[],
) => {
  const cleanMessages = async () => {
    if (messagesToDelete.length) {
      await Promise.all([
        messagesToDelete.map(async (messageId) => {
          try {
            await bot.deleteMessage(chatId, messageId);
          } catch (e) {
            console.error(e);
          }
        }),
      ]);
    }

    if (messagesToUpdate.length) {
      await Promise.all([
        messagesToUpdate.map(async (messageId) => {
          try {
            await bot.editMessageReplyMarkup({ inline_keyboard: [] }, { chat_id: chatId, message_id: messageId });
          } catch (e) {
            console.error(e);
            console.error(`Error: ${messageId}`);
          }
        }),
      ]);
    }
  };

  if (!messages?.length) {
    await onError(chatId);
    return await cleanMessages();
  }

  const handleMessageId = (keep: null | boolean, messageId: number) => {
    if (!keep) (keep === null ? newMessagesToUpdate : newMessagesToDelete).push(messageId);
  };

  const newMessagesToDelete: number[] = [];
  const newMessagesToUpdate: number[] = [];

  for (const message of messages) {
    /*TODO: implement poll sending
    Now it's not working because of the bug in the library

    if (message.words?.length && message.correct !== undefined) {
      const { message_id } = await bot.sendPoll(chatId, message.text, message.words, {
        type: 'quiz',
        correct_option_id: message.correct,
      });

      continue;
    }*/

    let sentMessage: TelegramBot.Message | null = null;

    if (message.text === '...') {
      const dialogMessageId = (await bot.sendMessage(chatId, message.text)).message_id;
      await grpcUserService.sendDialogMsgId(chatId, dialogMessageId);
      continue;
    }

    try {
      // Send image or text message
      if (message instanceof CrossroadsImageMessage) {
        sentMessage = await bot.sendPhoto(chatId, `${message.img}?random=${Math.random()}`, {
          ...message.sendOptions,
          caption: message.text,
        });
      } else {
        // Simple text message
        sentMessage = await bot.sendMessage(chatId, message.text, {
          ...message.sendOptions,
          parse_mode: 'HTML',
        });

        if (message.toForceUpdate) await grpcUserService.updateMsgIdForForceUpd(chatId, sentMessage.message_id);
      }
    } catch (e) {
      console.error(e);

      // Send error message about image loading
      newMessagesToDelete.push(
        (
          await bot.sendMessage(chatId, '\u{1f5bc} Не удалось загрузить изображение :(', {
            parse_mode: 'HTML',
          })
        ).message_id,
      );
    }

    if (!sentMessage) continue;

    handleMessageId(message.keep, sentMessage.message_id);
  }

  await cleanMessages();

  await grpcUserService.addButton(chatId, newMessagesToDelete, true);
  await grpcUserService.addButton(chatId, newMessagesToUpdate);
};
