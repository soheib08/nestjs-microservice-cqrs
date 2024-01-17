import { NestFactory } from '@nestjs/core';
import { Transport, MicroserviceOptions } from '@nestjs/microservices';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    AppModule,
    {
      transport: Transport.RMQ,
      options: {
        urls: [process.env.RABBIT_URL],
        queue: 'logs',
        queueOptions: { durable: false },
        prefetchCount: 1,
      },
    },
  );
  await app.listen();
}
bootstrap();
