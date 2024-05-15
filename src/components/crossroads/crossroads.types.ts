import type { SendBasicOptions } from 'node-telegram-bot-api';

export interface ICrossroadsMessageDependencies {
  text: string;
  sendOptions?: SendBasicOptions;
  /**
   * true - delete message
   * false - keep message
   * undefined - update message
   */
  keep?: boolean | null;
  // is needed to update message by grpc call
  toForceUpdate?: boolean;
}

export interface ICrossroadsAudioMessageDependencies extends ICrossroadsMessageDependencies {
  audio: string;
}

export interface ICrossroadsImageMessageDependencies extends ICrossroadsMessageDependencies {
  img: string;
}
