import { Test, TestingModule } from '@nestjs/testing';
import { TwilioIvrService } from './twilio-ivr.service';

describe('TwilioIvrService', () => {
  let service: TwilioIvrService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TwilioIvrService],
    }).compile();

    service = module.get<TwilioIvrService>(TwilioIvrService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
