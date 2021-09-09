import { MessageAPIResponseBase } from '@line/bot-sdk';
import { Injectable } from '@nestjs/common';
import client from 'src/line/config/line.config';
import { EventPayload } from '../../line.interface';

@Injectable()
export class FollowHandler {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  handleByEvent(event: EventPayload): Promise<MessageAPIResponseBase> {
    const { replyToken } = event;
    return client.replyMessage(replyToken, {
      type: 'text',
      text: 'example',
    });
  }
}
