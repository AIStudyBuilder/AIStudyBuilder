import type { InlineKeyboardButton, KeyboardButton } from 'node-telegram-bot-api';

import { NextType, type User } from '@/proto/getuser/getuser_pb';
import { CallbackQueryMethod } from '@/types/callback-query-method';
import { BUTTONS } from '@/components/buttons';
import { buildMediaUrl } from '@/utils/build-media-url';

import type { ICrossroadsMessageDependencies } from './crossroads.types';
import { CrossroadsImageMessage, CrossroadsMessage } from './crossroads-message';

/**
 * Function helper to build keyboard for crossroads response
 * and reduce code duplication
 * @param buttons
 * @param isQuiz
 */
const buildKeyboard = (
  buttons: (InlineKeyboardButton | KeyboardButton)[],
  isQuiz = false,
): ICrossroadsMessageDependencies['sendOptions'] => {
  const chunkSize = 2;
  const resultButtons: InlineKeyboardButton[][] = [];

  if (!isQuiz) {
    for (let i = 0; i < buttons.length; i += chunkSize) {
      resultButtons.push(buttons.slice(i, i + chunkSize));
    }
  } else {
    resultButtons.push(...buttons.map((button) => [button]));
  }

  return {
    reply_markup: {
      inline_keyboard: resultButtons,
    },
  };
};

/**
 * Function to generate crossroads content response
 * @param user
 * @param testResultMessage
 * @param nextType
 */
const crossroadsContent = (
  user: User,
  testResultMessage: string | undefined,
  nextType: NextType,
): CrossroadsMessage[] | undefined => {
  const content = user.getContent();

  if (!content) return;

  return [
    testResultMessage &&
      new CrossroadsMessage({
        text: testResultMessage,
      }),
    new CrossroadsMessage({
      text: 'Давай приступим к уроку!',
      sendOptions: buildKeyboard(
        [
          nextType === NextType.CONTENT && {
            text: 'Перейти к следующему уроку',
            callback_data: JSON.stringify({ method: CallbackQueryMethod.START_LESSON }),
          },
          BUTTONS.learn,
        ].filter(Boolean),
        true,
      ),
      toForceUpdate: true,
    }),
  ].filter(Boolean);
};

/**
 * Function to generate crossroads dialog response
 * @param user
 * @param testResultMessage
 */
const crossroadsDialog = (user: User, testResultMessage: string | undefined): CrossroadsMessage[] | undefined => {
  const dialog = user.getDialog();

  if (!dialog) return;

  // const { instruction, botreply, botreplyaudio, recommendation } = dialog.toObject();
  // const botReplyData = parseBotReply(botreply);
  //
  // if (botreply) {
  //   if (botReplyData instanceof Error) {
  //     console.error(botReplyData);
  //     return;
  //   }
  //
  //   const finishButtonKeyboard = buildKeyboard([
  //     {
  //       text: 'Следующий урок \u{27a1}',
  //       callback_data: JSON.stringify({ method: CallbackQueryMethod.FINISH }),
  //     },
  //   ]);
  //
  //   const text =
  //     typeof botReplyData === 'string'
  //       ? botReplyData
  //       : `${botReplyData.r}\n\n<blockquote>${botReplyData.i}</blockquote>`;
  //
  //   const audio = buildMediaUrl(botreplyaudio);
  //
  //   return [
  //     audio
  //       ? new CrossroadsAudioMessage({
  //           text,
  //           audio,
  //           keep: true,
  //         })
  //       : new CrossroadsMessage({
  //           text,
  //         }),
  //     recommendation && recommendation !== 'R'
  //       ? new CrossroadsMessage({
  //           text: recommendation,
  //           sendOptions: finishButtonKeyboard,
  //           keep: null,
  //         })
  //       : undefined,
  //     recommendation && recommendation === 'R'
  //       ? new CrossroadsMessage({
  //           text: 'Готовлю отчет, пожалуйста подождите \u{1f4ad}',
  //         })
  //       : undefined,
  //   ].filter(Boolean);
  // }
  //
  // return [
  //   testResultMessage &&
  //     new CrossroadsMessage({
  //       text: testResultMessage,
  //     }),
  //   new CrossroadsMessage({
  //     text: `\u{1f4dd} Твоя задача: ${instruction.trim()}\n\nИспользуй текст \u{1f524} или голос \u{1f399}`,
  //   }),
  //   new CrossroadsMessage({
  //     text: 'Нажми "Приступить", как будешь готов',
  //     sendOptions: buildKeyboard([
  //       {
  //         text: 'Приступить \u{1f4ac}',
  //         callback_data: JSON.stringify({ method: CallbackQueryMethod.START }),
  //       },
  //       {
  //         text: 'Пропустить \u{27a1}',
  //         callback_data: JSON.stringify({ method: CallbackQueryMethod.SKIP }),
  //       },
  //     ]),
  //   }),
  // ].filter(Boolean);

  const { botreply, instruction } = dialog.toObject();

  return [
    testResultMessage &&
      new CrossroadsMessage({
        text: testResultMessage,
      }),
    instruction && [
      new CrossroadsMessage({
        text: `\u{1f4dd} Твоя задача: ${instruction.trim()}\n\nИспользуй текст \u{1f524} или голос \u{1f399}`,
      }),
      new CrossroadsMessage({
        text: 'Нажми "Приступить", как будешь готов',
        sendOptions: buildKeyboard([
          {
            text: 'Приступить \u{1f4ac}',
            callback_data: JSON.stringify({ method: CallbackQueryMethod.START }),
          },
          {
            text: 'Пропустить \u{27a1}',
            callback_data: JSON.stringify({ method: CallbackQueryMethod.SKIP }),
          },
        ]),
      }),
    ],
    botreply &&
      new CrossroadsMessage({
        text: botreply,
      }),
  ]
    .filter(Boolean)
    .flat();
};

/**
 * Function to generate crossroads test response
 * @param user
 * @param testResultMessage
 */
const crossroadsTest = (user: User, testResultMessage: string | undefined): CrossroadsMessage[] | undefined => {
  const test = user.getTest();

  if (!test) return;

  const nextType = user.getNexttype();
  const { imgurl, info, question, quizwordsList } = test.toObject();

  const getMainMessage = (): CrossroadsMessage => {
    const text = imgurl
      ? '\u{1f914} Что изображено на картинке?'
      : `\u{1f914} Выбери правильный ответ:\n\n${info ? `${info}\n` : ''}${question}`;

    const img = buildMediaUrl(imgurl);

    const sendOptions = buildKeyboard(
      [
        ...(quizwordsList.length
          ? quizwordsList.map((word) => ({
              text: word,
              callback_data: JSON.stringify({ method: CallbackQueryMethod.ANSWER, data: word }),
            }))
          : []),
        BUTTONS.repeat,
      ],
      true,
    );

    return img
      ? new CrossroadsImageMessage({
          text,
          img,
          sendOptions,
        })
      : new CrossroadsMessage({
          text,
          sendOptions,
        });
  };

  return [
    testResultMessage &&
      new CrossroadsMessage({
        text: testResultMessage,
      }),
    nextType !== NextType.TEST &&
      new CrossroadsMessage({
        text: 'И последний вопрос!',
      }),
    getMainMessage(),
  ].filter(Boolean);
};

/**
 * Function to determine the type of response to send
 * It's named crossroads because it's the point where the user can go in different directions
 * @param user
 */
export const crossroads = (user: User): CrossroadsMessage[] | undefined => {
  const testResultComment = user.getTestresultcomment();
  const testResultMessage =
    testResultComment.length !== 0
      ? `<blockquote>${testResultComment !== '-' ? testResultComment : 'Правильно! \u{1f389}'}</blockquote>`
      : undefined;

  const nextType = user.getNexttype();

  if (user.hasContent()) return crossroadsContent(user, testResultMessage, nextType);
  if (user.hasDialog()) return crossroadsDialog(user, testResultMessage);
  if (user.hasTest()) return crossroadsTest(user, testResultMessage);

  return;
};
