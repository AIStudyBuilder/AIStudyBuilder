import type {
  ICrossroadsAudioMessageDependencies,
  ICrossroadsImageMessageDependencies,
  ICrossroadsMessageDependencies,
} from '@/components/crossroads/crossroads.types';

export class CrossroadsMessage {
  text: ICrossroadsMessageDependencies['text'];
  sendOptions?: ICrossroadsMessageDependencies['sendOptions'];
  keep: Exclude<ICrossroadsMessageDependencies['keep'], undefined>;
  toForceUpdate: Exclude<ICrossroadsMessageDependencies['toForceUpdate'], undefined>;

  constructor({ text, sendOptions, keep, toForceUpdate }: ICrossroadsMessageDependencies) {
    this.text = text;
    this.sendOptions = sendOptions;
    this.keep = keep === null ? keep : keep ?? false;
    this.toForceUpdate = toForceUpdate ?? false;
  }
}

export class CrossroadsAudioMessage extends CrossroadsMessage {
  audio: ICrossroadsAudioMessageDependencies['audio'];

  constructor({ audio, ...dependencies }: ICrossroadsAudioMessageDependencies) {
    super(dependencies);

    this.audio = audio;
  }
}

export class CrossroadsImageMessage extends CrossroadsMessage {
  img: ICrossroadsImageMessageDependencies['img'];

  constructor({ img, ...dependencies }: ICrossroadsImageMessageDependencies) {
    super(dependencies);

    this.img = img;
  }
}
