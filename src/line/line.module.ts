import { Module } from '@nestjs/common';
import { LineController } from './controllers/line.controller';
import { LineHandleEvent } from './line-handlers/event.handler';
import { FollowHandler } from './line-handlers/follow/follow.handler';
import { MessageHandler } from './line-handlers/message/message.handler';
import { AudioHandler } from './line-handlers/message/types/audio.handler';
import { ImageHandler } from './line-handlers/message/types/image.handler';
import { LocationHandler } from './line-handlers/message/types/location.handler';
import { StickerHandler } from './line-handlers/message/types/sticker.handler';
import { TextHandler } from './line-handlers/message/types/text.handler';
import { PostbackHandler } from './line-handlers/postback/postback.handler';
import { LineService } from './services/line.service';

@Module({
  controllers: [LineController],
  providers: [
    LineService,
    LineHandleEvent,
    MessageHandler,
    TextHandler,
    ImageHandler,
    AudioHandler,
    LocationHandler,
    StickerHandler,
    PostbackHandler,
    LineController,
    FollowHandler,
  ],
})
export class LineModule {}
