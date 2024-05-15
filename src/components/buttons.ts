import { CONFIG } from '@/config';
import { CallbackQueryMethod } from '@/types/callback-query-method';

export const BUTTONS = {
  repeat: {
    text: 'Повторить материал \u{1f9e0}',
    web_app: { url: CONFIG.WEB_APP_URL },
  },
  learn: {
    text: 'Изучать \u{1f9e0}',
    web_app: { url: CONFIG.WEB_APP_URL },
  },
  startDialog: {
    text: 'Перейти к диалогу \u{1f4ac}',
    callback_data: JSON.stringify({ method: CallbackQueryMethod.START_DIALOG }),
  },
  startTest: {
    text: 'Перейти к тесту по материалу \u{1f3af}',
    callback_data: JSON.stringify({ method: CallbackQueryMethod.START_TEST }),
  },
  nextLesson: {
    text: 'Следующий урок \u{27a1}',
    callback_data: JSON.stringify({ method: CallbackQueryMethod.FINISH }),
  },
} as const;
