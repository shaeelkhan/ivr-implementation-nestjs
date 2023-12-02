// src/app.controller.ts
import { Controller, Get, Query, Post, Body } from '@nestjs/common';
import { CallService } from './call-service/call.service';
import { CallStatus } from 'src/enums/call-status.enum';
import { TwilioIvrService } from './twilio-ivr.service';
import { ApiTags } from '@nestjs/swagger';


@Controller()
@ApiTags('Main')
export class TwilioIvrController {
  constructor(
    private readonly twilioService: TwilioIvrService,
    private readonly callService: CallService, // Add this dependency
  ) {}

  @Get('/initiate-forwarding')
  async initiateForwarding(
    @Query('to') to: string,
    @Query('from') from: string,
    @Query('forwardingNumber') forwardingNumber: string,
    @Query('digitPressed') digitPressed: string, // Add this query parameter
  ): Promise<string> {
    await this.twilioService.forwardCall(
      to, 
      from, //Use Twilio phone number as this number saved in env file
      forwardingNumber,
      digitPressed,
    );

    // Log the call in the database
    await this.callService.logCall({
      to,
      from,
      status: CallStatus.INITIATED,
      duration: 0,
      voicemailUrl: null,
    });

    return 'Call forwarding initiated!';
  }

  @Post('/voicemail')
  async handleVoicemail(@Body() voicemailData: any): Promise<string> {
    // Process voicemail data and save it to the database
    await this.callService.logVoicemail(voicemailData);

    return 'Voicemail received successfully!';
  }
}
