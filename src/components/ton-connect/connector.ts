import TonConnect from '@tonconnect/sdk';

import { CONFIG } from '@/config';

import { TonConnectStorage } from './storage';

export const getConnector = (chatId: number): TonConnect => {
  return new TonConnect({
    manifestUrl: CONFIG.MANIFEST_URL,
    storage: new TonConnectStorage(chatId)
  });
}