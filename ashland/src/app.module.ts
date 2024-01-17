import { Module } from '@nestjs/common';
import { CqrsModule } from '@nestjs/cqrs';
import { LogController } from './application/log.controller';
import { TaskCreatedEventHandler } from './application/handler/task-created.handler';
import { TaskDeletedEventHandler } from './application/handler/task-deleted.handler';
import { TaskListEventHandler } from './application/handler/task-list.handler';
import { ConfigModule } from '@nestjs/config';
import { validate } from './infrastructure/config/app.configuration';

export const EventHandlers = [
  TaskCreatedEventHandler,
  TaskDeletedEventHandler,
  TaskListEventHandler,
];

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      validate: validate,
    }),
    CqrsModule,
  ],
  controllers: [LogController],
  providers: [...EventHandlers],
})
export class AppModule {}
