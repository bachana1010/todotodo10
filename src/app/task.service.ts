import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { TaskTodo, TaskApiResponse } from './complete-todo/complete-todo/complete-todo.component';

interface AddTodo {
  Task: string;
  Status: boolean;
}

export interface TaskApiResult {
  $id: string;
  $values: TaskTodo[];
}



export interface CustomTaskApiResult {
  $id: string;
  $values: TaskApiResult[];
}


@Injectable({
  providedIn: 'root',
})
export class TaskService {
  private taskSubject = new BehaviorSubject<TaskTodo[]>([]);
  taskChanged = new Subject<void>();

  endpoint = 'http://localhost:5000';

  constructor(private http: HttpClient) {}

  AddTask(task: AddTodo): Observable<any> {
    const token = localStorage.getItem('Authorization');
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);

    return this.http.post(this.endpoint + '/api/Todos', task, { headers: headers });
  }

  getinCompleteTodo(): Observable<TaskApiResponse> {
    return this.http.get<TaskApiResponse>(this.endpoint + "/api/Todos");
  }

  deleteTodo(id: number): Observable<any> {
    return this.http.delete<any>(`${this.endpoint}/api/Todos/${id}`);
  }



  getAuthenticatedUserTodos(headers: HttpHeaders): Observable<TaskApiResult> {
    return this.http.get<TaskApiResult>(`${this.endpoint}/api/Todos/ByUser`, { headers: headers });
  }
  






  // taskDeleted(task: Todo) {
  //   const currentTasks = this.taskSubject.getValue();
  //   const updatedTasks = currentTasks.filter((t) => t.id !== task.id);
  //   this.taskSubject.next(updatedTasks);
  //   this.taskChanged.next();
  // }

  // taskCompleted(task: Todo) {
  //   const currentTasks = this.taskSubject.getValue();
  //   const updatedTasks = currentTasks.map((t) =>
  //     t.id === task.id ? { ...t, status: 'complete' } : t
  //   );
  //   this.taskSubject.next(updatedTasks);
  //   this.taskChanged.next();
  // }

  // taskIncomplete(task: Todo) {
  //   const currentTasks = this.taskSubject.getValue();
  //   const updatedTasks = currentTasks.map((t) =>
  //     t.id === task.id ? { ...t, status: 'incomplete' } : t
  //   );
  //   this.taskSubject.next(updatedTasks);
  //   this.taskChanged.next();
  // }
}






// import { HttpClient } from '@angular/common/http';
// import { Injectable } from '@angular/core';
// import { BehaviorSubject, Observable, Subject } from 'rxjs';

// interface Todo {
//   id: number;
//   task: string;
//   status: boolean;
// }

// interface AddTodo {
//   Task: string;
//   Status: boolean;
//   UserId: number;
// }

// interface ApiResponse {
//   data: Todo[];
// }

// @Injectable({
//   providedIn: 'root',
// })
// export class TaskService {
//   private taskSubject = new BehaviorSubject<Todo[]>([]);
//   taskChanged = new Subject<void>();

//   endpoint = 'http://localhost:5000';

//   constructor(private http: HttpClient) {}

//   AddTask(task: AddTodo) {
//     return this.http.post(this.endpoint + '/api/Todos', task);
//   }

//   getinCompleteTodo(): Observable<ApiResponse> {
//     return this.http.get<ApiResponse>(this.endpoint + '/api/Todos');
//   }

//   deleteTodo(id: number): Observable<any> {
//     return this.http.delete<any>(`${this.endpoint}/api/Todos/${id}`);
//   }

//   getTasks(): Observable<ApiResponse> {
//     return this.http.get<ApiResponse>(this.endpoint + '/api/Todos');
//   }

//   taskDeleted(task: Todo) {
//     const currentTasks = this.taskSubject.getValue();
//     const updatedTasks = currentTasks.filter((t) => t.id !== task.id);
//     this.taskSubject.next(updatedTasks);
//     this.taskChanged.next();
//   }

//   taskCompleted(task: Todo) {
//     const currentTasks = this.taskSubject.getValue();
//     const updatedTasks = currentTasks.map((t) =>
//       t.id === task.id ? { ...t, status: true } : t
//     );
//     this.taskSubject.next(updatedTasks);
//     this.taskChanged.next();
//   }

//   taskIncomplete(task: Todo) {
//     const currentTasks = this.taskSubject.getValue();
//     const updatedTasks = currentTasks.map((t) =>
//       t.id === task.id ? { ...t, status: false } : t
//     );
//     this.taskSubject.next(updatedTasks);
//     this.taskChanged.next();
//   }
// }
