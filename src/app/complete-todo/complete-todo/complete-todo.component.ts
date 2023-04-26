import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { TaskService } from 'src/app/task.service';

export interface User {
  id: number;
  username: string;
  // Add other properties if needed
}

export interface TaskTodo {
  id: number;
  task: string;
  status: boolean;
  user: User;
}


export interface TaskApiResponse {
  $id: string;
  $values: TaskTodo[];
}


@Component({
  selector: 'app-complete-todo',
  templateUrl: './complete-todo.component.html',
  styleUrls: ['./complete-todo.component.scss']
})
export class CompleteTodoComponent implements OnInit {
  todoData1: any;

  constructor(private httpClient: HttpClient, private taskService: TaskService) {}

  ngOnInit(): void {
    this.loadData();
  }

  loadData() {
    this.taskService.getinCompleteTodo().subscribe((response: TaskApiResponse) => {
      console.log('esaa axali responsi', response);
      this.todoData1 = response.$values;
      console.log(response.$values);
    });
  }

  delete(item: any) {
    if (confirm("Are you sure to delete " + item.task + "?")) {
      this.taskService.deleteTodo(item.id).subscribe(response => {
        this.loadData();
        console.log(response);
      });
    }
  }

  markAsComplete(item: any) {
    item.status = !item.status;

    // Update the status in the database
    this.httpClient.put(`http://localhost:5000/api/Todos/${item.id}`, item).subscribe(response => {
      this.loadData();
      console.log(response);
    });
  }
}






// import { HttpClient } from '@angular/common/http';
// import { Component, OnInit } from '@angular/core';
// import { TaskService } from 'src/app/task.service';

// export interface TaskTodo {
//   id: number;
//   task: string;
//   status: boolean;
// }

// export interface TaskApiResponse {
//   $id: string;
//   $values: TaskTodo[];
// }


// @Component({
//   selector: 'app-complete-todo',
//   templateUrl: './complete-todo.component.html',
//   styleUrls: ['./complete-todo.component.scss']
// })
// export class CompleteTodoComponent implements OnInit {
//   todoData1: any;

//   constructor(private httpClient: HttpClient, private taskService: TaskService) {}

//   ngOnInit(): void {
//     this.loadData();
//   }

//   loadData() {
//     this.taskService.getinCompleteTodo().subscribe((response: TaskApiResponse) => {
//       console.log('esaa axali responsi', response);
//       this.todoData1 = response.$values;
//       console.log(response.$values);
//     });
//   }

//   delete(item: any) {
//     if (confirm("Are you sure to delete " + item.task + "?")) {
//       this.taskService.deleteTodo(item.id).subscribe(response => {
//         this.loadData();
//         console.log(response);
//       });
//     }
//   }

//   markAsComplete(item: any) {
//     item.status = !item.status;

//     // Update the status in the database
//     this.httpClient.put(`http://localhost:5000/api/Todos/${item.id}`, item).subscribe(response => {
//       this.loadData();
//       console.log(response);
//     });
//   }
// }
