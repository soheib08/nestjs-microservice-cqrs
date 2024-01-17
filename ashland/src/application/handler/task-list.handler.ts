import { Logger } from '@nestjs/common';
import { EventsHandler, IEventHandler } from '@nestjs/cqrs';
import { TaskListEvent } from 'src/domain/event/task-list.event';
import { Log } from 'src/domain/model/log';

@EventsHandler(TaskListEvent)
export class TaskListEventHandler implements IEventHandler<TaskListEvent> {
  private readonly logger = new Logger(TaskListEventHandler.name);
  constructor() {}

  handle(event: TaskListEvent) {
    let log = new Log('task_list', event);
    this.logger.verbose(log.name, log.payload);
  }
}
