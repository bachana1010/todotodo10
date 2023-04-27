import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { TaskApiResult, TaskService } from 'src/app/task.service';
import { TaskTodo } from 'src/app/complete-todo/complete-todo/complete-todo.component';

@Component({
  selector: 'app-my-todocomponent',
  templateUrl: './my-todocomponent.component.html',
  styleUrls: ['./my-todocomponent.component.scss']
})
export class MyTodocomponentComponent implements OnInit {
  // todoData1: any
  todoData1: TaskTodo[] = []; 

  constructor(private taskService: TaskService,
              private httpClient: HttpClient) { }

  ngOnInit(): void {
    this.fetchTodos()
  }

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
    this.taskService.markAsComplete(item).subscribe((response: unknown) => {
      this.fetchTodos();
      console.log(response);
    });
    
  }

}
