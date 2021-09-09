import { Module } from '@nestjs/common';
import { LineController } from './controllers/line.controller';
import { LineService } from './services/line.service';

@Module({
  controllers: [LineController],
  providers: [LineService],
})
export class LineModule {}
