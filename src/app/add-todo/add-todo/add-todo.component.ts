import { FormBuilder, FormGroup, FormsModule } from '@angular/forms'; // Make sure to import FormsModule in the module where this component is declared
import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { TaskService } from 'src/app/task.service';

interface Todo {
  id: number;
  todo: string;
  status: string;
}

interface AddTodo {
  Task: string;
  Status: boolean;
}
@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.scss']
})

export class AddTodoComponent implements OnInit {
  myForm: FormGroup | any;

  constructor(private fb: FormBuilder, private httpClient: HttpClient,
              private taskService: TaskService) { }

  ngOnInit(): void {
    this.myForm = this.fb.group({
      taskinput: ''
    })
  }

  addTask(form: FormGroup): void {
    const sendData: AddTodo = {
      Task: form.value.taskinput,
      Status: false, // Set initial Status to false
    };

  this.taskService.AddTask(sendData).subscribe((res) => {
    console.log("pasuxi",res)
    console.log(sendData);
    this.myForm.reset();


  })}

  onFormSubmit(form: FormGroup): void {
    this.addTask(form);
  }


}
