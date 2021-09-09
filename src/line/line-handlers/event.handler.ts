import { Injectable } from '@nestjs/common';
import { FollowHandler } from './follow/follow.handler';
import { MessageHandler } from './message/message.handler';
import { PostbackHandler } from './postback/postback.handler';

@Injectable()
export class LineHandleEvent {
  // eslint-disable-next-line @typescript-eslint/ban-types
  private readonly lineEvents: object;

  constructor(
    private readonly messageHandler: MessageHandler,
    private readonly postbackHandler: PostbackHandler,
    private readonly followHandler: FollowHandler,
  ) {
    this.lineEvents = {
      message: this.messageHandler,
      follow: this.followHandler,
      unfollow: 'event type -> unfollow',
      join: 'event type -> join',
      leave: 'event type -> forleave',
      postback: this.postbackHandler,
      beacon: 'event type -> beacon',
    };
  }

  handleEvent(events: any[]): any[] {
    return events.map((event) =>
      this.lineEvents[event.type].handleByEvent(event),
    );
  }
}
