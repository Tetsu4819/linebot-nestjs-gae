import { Injectable } from '@nestjs/common';

@Injectable()
export class AudioHandler {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  handleByMessageType(events: any): any {
    return `AudioHandler.handleByMessageType()`;
  }
}
