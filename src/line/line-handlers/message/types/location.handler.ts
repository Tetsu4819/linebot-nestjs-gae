import { Injectable } from '@nestjs/common';

@Injectable()
export class LocationHandler {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  handleByMessageType(events: any): any {
    return `LocationHandler.handleByMessageType()`;
  }
}
