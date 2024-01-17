import { Controller } from '@nestjs/common';
import { EventBus } from '@nestjs/cqrs';
import { EventPattern } from '@nestjs/microservices';
import { TaskCreatedEvent } from 'src/domain/event/task-created.event';
import { TaskDeletedEvent } from 'src/domain/event/task-deleted.event';
import { TaskListEvent } from 'src/domain/event/task-list.event';

@Controller()
export class LogController {
  constructor(private eventBus: EventBus) {}

  @EventPattern('task_created')
  async handleTaskCreated(data: Record<string, unknown>) {
    this.eventBus.publish(new TaskCreatedEvent());
  }

  @EventPattern('task_deleted')
  async handleDeletedCreated(data: Record<string, unknown>) {
    this.eventBus.publish(new TaskDeletedEvent());
  }

  @EventPattern('task_list')
  async handleTaskList(data: Record<string, unknown>) {
    this.eventBus.publish(new TaskListEvent());
  }
}
