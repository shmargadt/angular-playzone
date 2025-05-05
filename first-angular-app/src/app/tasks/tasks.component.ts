import { Component, Input } from '@angular/core';
import { TaskComponent } from './task/task.component';

type User = {
  id: string;
  name: string;
  avatar: string;
}

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [TaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent {
  @Input ({ required: true }) user: User | undefined;

  get tasks(): any[] {
    return [
      1,2,3,4,5
    ]
  }

  onAddTask(): void {
    console.log('Task clicked:');
  }
}
