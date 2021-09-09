import { Injectable } from '@nestjs/common';
import { AudioHandler } from './types/audio.handler';
import { LocationHandler } from './types/location.handler';
import { MessageEvent } from '@line/bot-sdk';
import { TextHandler } from './types/text.handler';

@Injectable()
export class MessageHandler {
  // eslint-disable-next-line @typescript-eslint/ban-types
  private readonly messageTypes: object;

  constructor(
    private readonly textHandler: TextHandler,
    private readonly audioHandler: AudioHandler,
    private readonly locationHandler: LocationHandler,
  ) {
    this.messageTypes = {
      text: this.textHandler,
      audio: this.audioHandler,
      location: this.locationHandler,
    };
  }

  async handleByEvent(event: MessageEvent): Promise<any> {
    return this.messageTypes[event.message.type].handleByMessageType(event);
  }
}
