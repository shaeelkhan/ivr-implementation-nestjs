import { Module } from '@nestjs/common';
import { TwilioIvrModule } from './Twilio/twilio-ivr.module';
import { MongooseModule } from '@nestjs/mongoose';
import { CallSchema } from './models/call.model';
import { CallService } from './Twilio/call-service/call.service';
import { TwilioIvrService } from './Twilio/twilio-ivr.service';
import { TwilioIvrController } from './Twilio/twilio-ivr.controller';
import { ConfigModule } from '@nestjs/config';
import { VoicemailSchema } from './models/voice-mail.model';


@Module({
  imports: [ConfigModule.forRoot({
    envFilePath: 'src/config/.env',
    isGlobal: true,

  }),
  MongooseModule.forRoot(process.env.MONGO_URI),
  MongooseModule.forFeature([{ name: 'Call', schema: CallSchema }]),
  MongooseModule.forFeature([{ name: 'Voicemail', schema: VoicemailSchema }]), // Add this line
  ],
  controllers: [TwilioIvrController],
  providers: [TwilioIvrService, CallService],
})
export class AppModule { }


