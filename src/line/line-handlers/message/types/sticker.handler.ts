import { Injectable } from '@nestjs/common';

@Injectable()
export class StickerHandler {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  handleByMessageType(events: any): any {
    return `StickerHandler.handleByMessageType()`;
  }
}
