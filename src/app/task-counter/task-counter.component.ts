import { HttpClient } from '@angular/common/http';
import { Component, DoCheck, OnChanges, OnInit } from '@angular/core';
import { TaskService } from '../task.service';
interface Todo {
  id: number;
  todo: string;
  status: string;
}

interface ApiResponse {
  data: Todo[];
}
@Component({
  selector: 'app-task-counter',
  templateUrl: './task-counter.component.html',
  styleUrls: ['./task-counter.component.scss']
})
export class TaskCounterComponent implements OnInit {

  completeTasks: number = 0;
  incompleteTasks: number = 0;

  constructor(private taskService: TaskService) {}

  ngOnInit(): void {
    this.taskService.getTasks().subscribe((tasks: Todo[]) => {
      this.updateCounts(tasks);
    });

    this.taskService.taskChanged.subscribe(() => {
      this.taskService.getTasks().subscribe((tasks: Todo[]) => {
        this.updateCounts(tasks);
      });
    });
  }

  updateCounts(tasks: Todo[]) {
    this.completeTasks = tasks.filter((task) => task.status === 'complete').length;
    this.incompleteTasks = tasks.filter((task) =>
    task.status === 'incomplete').length;
  }
}

