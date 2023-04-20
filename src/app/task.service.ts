import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

interface Todo {
  id: number;
  todo: string;
  status: string;
}

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  private taskSubject = new BehaviorSubject<Todo[]>([]);
  taskChanged = new Subject<void>();

  constructor(private httpClient: HttpClient) {
    this.loadData();
  }

  loadData() {
    this.httpClient
      .get<{ data: Todo[] }>('http://127.0.0.1:8044/readtodo', {})
      .subscribe((response) => {
        this.taskSubject.next(response.data);
      });
  }

  getTasks() {
    return this.taskSubject.asObservable();
  }

  taskDeleted(task: Todo) {
    const currentTasks = this.taskSubject.getValue();
    const updatedTasks = currentTasks.filter((t) => t.id !== task.id);
    this.taskSubject.next(updatedTasks);
    this.taskChanged.next();
  }

  taskCompleted(task: Todo) {
    const currentTasks = this.taskSubject.getValue();
    const updatedTasks = currentTasks.map((t) =>
      t.id === task.id ? { ...t, status: 'complete' } : t
    );
    this.taskSubject.next(updatedTasks);
    this.taskChanged.next();
  }

  taskIncomplete(task: Todo) {
    const currentTasks = this.taskSubject.getValue();
    const updatedTasks = currentTasks.map((t) =>
      t.id === task.id ? { ...t, status: 'incomplete' } : t
    );
    this.taskSubject.next(updatedTasks);
    this.taskChanged.next();
  }
}
