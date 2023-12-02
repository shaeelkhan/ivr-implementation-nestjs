// src/twilio/twilio.service.ts
import { Injectable } from '@nestjs/common';
import * as twilio from 'twilio';

@Injectable()
export class TwilioIvrService {
    private readonly client: twilio.Twilio;

    constructor() {
      this.client = twilio(
        process.env.TWILIO_ACCOUNT_SID,
        process.env.TWILIO_AUTH_TOKEN,
      );
    }

  async forwardCall(
    to: string,
    from: string,
    forwardingNumber: string,
    digitPressed: string,
  ): Promise<void> {
    let url = '';

    if (digitPressed === '1') {
      // Redirect to your personal phone
      url = `http://your-ngrok-url/forward?forwardingNumber=${forwardingNumber}`;
    } else if (digitPressed === '2') {
      // Allow the caller to leave a voicemail
      url = `http://your-ngrok-url/voicemail`;
    }

    await this.client.calls.create({
      to,
      from,
      url,
      method: 'GET',
    });
  }
}
