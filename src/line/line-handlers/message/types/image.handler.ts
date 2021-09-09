import { Injectable } from '@nestjs/common';

@Injectable()
export class ImageHandler {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  handleByMessageType(events: any): any {
    return `ImageHandler.handleByMessageType()`;
  }
}
