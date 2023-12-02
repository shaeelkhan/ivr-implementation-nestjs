import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import {SwaggerModule , DocumentBuilder } from '@nestjs/swagger';
import { warn } from 'console';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const config = new DocumentBuilder()
    .setTitle('Twilio-IVR')
    .setDescription('Backend application')
    .setVersion('1.0')
    .addTag('')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  const PORT = process.env.PORT || 3005;
  const server = await app.listen(PORT);
  server.setTimeout(600000);
  warn(`APP IS LISTENING TO PORT ${PORT}`);
}
bootstrap();