import { Injectable } from '@nestjs/common';
import { PostbackEventPayload } from '../../line.interface';

@Injectable()
export class PostbackHandler {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  handleByEvent(event: PostbackEventPayload): any {
    return `PostbackHandler.handleByEvent()`;
  }
}
