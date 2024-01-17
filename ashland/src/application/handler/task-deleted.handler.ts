import { Logger } from '@nestjs/common';
import { EventsHandler, IEventHandler } from '@nestjs/cqrs';
import { TaskDeletedEvent } from 'src/domain/event/task-deleted.event';
import { Log } from 'src/domain/model/log';

@EventsHandler(TaskDeletedEvent)
export class TaskDeletedEventHandler
  implements IEventHandler<TaskDeletedEvent>
{
  private readonly logger = new Logger(TaskDeletedEventHandler.name);

  constructor() {}

  handle(event: TaskDeletedEvent) {
    let log = new Log('task_deleted', event);
    this.logger.fatal(log.name, log.payload);
  }
}
