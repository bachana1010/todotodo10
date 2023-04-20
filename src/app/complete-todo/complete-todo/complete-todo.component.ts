import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

interface Todo {
  id: number;
  todo: string;
  status: string;
}

interface ApiResponse {
  data: Todo[];
}
@Component({
  selector: 'app-complete-todo',
  templateUrl: './complete-todo.component.html',
  styleUrls: ['./complete-todo.component.scss']
})


export class CompleteTodoComponent implements OnInit {
  

  todoData: Todo[] = [];

  constructor(private httpClient: HttpClient) { }

  ngOnInit(): void {
    this.loadData()
  }

  loadData() {

    this.httpClient.get<ApiResponse>('http://127.0.0.1:8044/readtodo', {  })
      .subscribe(response => {
        console.log('Response:', response);
        this.todoData = response.data.filter(item => item.status === 'incomplete');
        console.log('Todo Data:', this.todoData);      });
  }

  delete(item: any) {
    if(confirm("Are you sure to delete " + item.country + " blog")) {
     
    this.httpClient.post("http://127.0.0.1:8044/deletetodo", item).subscribe(response => {
      this.loadData() 

      console.log(response)
    });
}

     
    }
    markAsComplete(item: any) {
      item.status = 'complete';
    
      this.httpClient.post("http://127.0.0.1:8044/updatetodo", item).subscribe(response => {
        this.loadData()
        console.log(response)
      });
        this.loadData();

    }
}
