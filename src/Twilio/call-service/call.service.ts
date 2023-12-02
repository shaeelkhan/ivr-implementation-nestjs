// src/call/call.service.ts
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Call } from 'src/models/call.model';
import { Voicemail } from 'src/models/voice-mail.model';
// Create a Call model

@Injectable()
export class CallService {
  constructor(
    @InjectModel('Call') private readonly callModel: Model<Call>,
    @InjectModel('Voicemail') private readonly voicemailModel: Model<Voicemail>) { }

  async logCall(callData: any): Promise<void> {
    const call = new this.callModel(callData);
    await call.save();
  }

  async logVoicemail(voicemailData: any): Promise<void> {
    const voicemail = new this.voicemailModel(voicemailData);
    await voicemail.save();
  }
}
