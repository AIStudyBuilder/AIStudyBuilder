import type { sendUnaryData, ServerUnaryCall, UntypedHandleCall } from '@grpc/grpc-js';

import type { IChatServiceServer } from '@/proto/getuser/getuser_grpc_pb';
import {
  type DialogMessageRequest,
  type NextContentRequest,
  GeneralResponse,
  NextType,
} from '@/proto/getuser/getuser_pb';
import { bot } from '@/components/bot';
import { BUTTONS } from '@/components/buttons';
import { parseBotReply } from '@/components/parser/parser';
import { buildMediaUrl } from '@/utils/build-media-url';
import { onError } from '@/components/handlers/error';
import { grpcUserService } from '@/services/index';

export class ChatServiceServer implements IChatServiceServer {
  [name: string]: UntypedHandleCall;

  async nextContent(
    call: ServerUnaryCall<NextContentRequest, GeneralResponse>,
    callback: sendUnaryData<GeneralResponse>,
  ): Promise<void> {
    const { messageId, telegramid, type } = call.request.toObject();

    console.log('>>> nextContent MSG_ID ', messageId);
    const response = new GeneralResponse();

    try {
      await bot.editMessageReplyMarkup(
        {
          inline_keyboard: [[BUTTONS.learn], [type === NextType.DIALOG ? BUTTONS.startDialog : BUTTONS.startTest]],
        },
        {
          chat_id: telegramid,
          message_id: Number(messageId),
        },
      );

      response.setResult('nextContent: OK');
    } catch (error) {
      console.error(error);

      response.setResult('nextContent: ERROR');
    } finally {
      callback(null, response);
    }
  }

  async dialogReply(
    call: ServerUnaryCall<DialogMessageRequest, GeneralResponse>,
    callback: sendUnaryData<GeneralResponse>,
  ): Promise<void> {
    const { telegramid, msg, msgid, preparereportmessage, voiceurl, report } = call.request.toObject();
    console.log('>>> dialogReply MSG_ID ', msgid);
    const sendResponse = (messageId?: number) => {
      const response = new GeneralResponse();
      if (messageId) response.setResult(`${messageId}`);

      callback(null, response);
    };

    try {
      if (preparereportmessage) {
        const sentMessage = await bot.sendMessage(telegramid, preparereportmessage, { parse_mode: 'HTML' });

        sendResponse(sentMessage.message_id);
        return;
      }

      if (!msg) {
        await Promise.all([
          report
            ? bot.editMessageText(report, {
                chat_id: telegramid,
                message_id: Number(msgid),
                parse_mode: 'HTML',
              })
            : bot.editMessageReplyMarkup(
                {
                  inline_keyboard: [[BUTTONS.nextLesson]],
                },
                {
                  chat_id: telegramid,
                  message_id: Number(msgid),
                },
              ),

          grpcUserService.addButton(Number(telegramid), [Number(msgid)]),
        ]);
      } else {
        const botReplyData = parseBotReply(msg);

        if (botReplyData instanceof Error) {
          console.error(botReplyData);
          return;
        }

        const text =
          typeof botReplyData === 'string'
            ? botReplyData
            : `${botReplyData.r}` + // "r" exists in botReplyData
              `${botReplyData.i ? `\n\n<blockquote>${botReplyData.i}</blockquote>` : ''}`;

        await bot.editMessageText(text, {
          chat_id: telegramid,
          message_id: Number(msgid),
          parse_mode: 'HTML',
        });

        const audio = buildMediaUrl(voiceurl);

        if (audio) {
          try {
            await bot.sendVoice(telegramid, audio, {
              reply_markup: {
                inline_keyboard: [[BUTTONS.repeat]],
              },
            });
          } catch (error) {
            console.error(error);
            await onError(error);
          }
        }
      }

      sendResponse();
    } catch (error) {
      console.error(error);
      sendResponse();
    }
  }
}
