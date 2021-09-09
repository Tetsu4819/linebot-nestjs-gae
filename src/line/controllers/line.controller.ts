import { WebhookRequestBody } from '@line/bot-sdk';
import { Body, Controller, Get, Post } from '@nestjs/common';
import { LineHandleEvent } from '../line-handlers/event.handler';

@Controller('line')
export class LineController {
  constructor(private readonly LineHandleEvent: LineHandleEvent) {}
  @Get()
  helloLine(): string {
    return 'Hello Line';
  }
  @Post('webhook')
  async lineWebhook(@Body() { events }: WebhookRequestBody): Promise<any> {
    return this.LineHandleEvent.handleEvent(events);
  }
}
