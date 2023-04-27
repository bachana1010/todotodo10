import { Component, OnInit } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';
import { TaskApiResult, TaskService } from 'src/app/task.service';
import { TaskTodo } from 'src/app/complete-todo/complete-todo/complete-todo.component';

@Component({
  selector: 'app-my-todocomponent',
  templateUrl: './my-todocomponent.component.html',
  styleUrls: ['./my-todocomponent.component.scss']
})
export class MyTodocomponentComponent implements OnInit {
  // todoData1: any
  todoData1: TaskTodo[] = []; // Initialize with an empty array
  httpClient: any;

  constructor(private taskService: TaskService) { }

  ngOnInit(): void {
    this.fetchTodos()
  }

  // Create a function with the desired code
  fetchTodos(): void {
    console.log("chaitvirta")
    const token = localStorage.getItem('Authorization');
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    this.taskService.getAuthenticatedUserTodos(headers).subscribe((response: TaskApiResult) => {
      this.todoData1 = response.$values;
    }); 
  
  }

  delete(item: any): void {
    if (confirm("Are you sure to delete " + item.task + "?")) {
      this.taskService.deleteTodo(item.id).subscribe(response => {
        this.fetchTodos()
        console.log(response);
      });
    }

  
  }

  markAsComplete(item: any): void {
    item.status = !item.status;

    this.httpClient.put(`http://localhost:5000/api/Todos/${item.id}`, item).subscribe((response: unknown) => {
  this.fetchTodos();
  console.log(response);
});
    
    // Implement the update functionality here
  }

}
