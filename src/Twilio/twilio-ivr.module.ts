import { Module } from '@nestjs/common';
import { TwilioIvrController } from './twilio-ivr.controller';
import { TwilioIvrService } from './twilio-ivr.service';

@Module({
  controllers: [TwilioIvrController],
  providers: [TwilioIvrService]
})
export class TwilioIvrModule {}
