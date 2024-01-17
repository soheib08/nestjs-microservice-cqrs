import { Logger } from '@nestjs/common';
import { EventsHandler, IEventHandler } from '@nestjs/cqrs';
import { TaskCreatedEvent } from 'src/domain/event/task-created.event';
import { Log } from 'src/domain/model/log';

@EventsHandler(TaskCreatedEvent)
export class TaskCreatedEventHandler
  implements IEventHandler<TaskCreatedEvent>
{
  private readonly logger = new Logger(TaskCreatedEventHandler.name);
  constructor() {}

  handle(event: TaskCreatedEvent) {
    let log = new Log('task_created', event);
    this.logger.debug(log.name, log.payload);
  }
}
