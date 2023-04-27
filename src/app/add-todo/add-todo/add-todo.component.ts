import { FormBuilder, FormGroup, FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild, ElementRef, PipeTransform } from '@angular/core';
import { TaskService } from 'src/app/task.service';
import { TaskAddTimePipe } from 'src/app/task-addtime.pipe';

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
  styleUrls: ['./add-todo.component.scss'],
  providers: [TaskAddTimePipe] 

})

export class AddTodoComponent implements OnInit {
  myForm: FormGroup | any;
  addedTime: string; 

  constructor(private fb: FormBuilder, private httpClient: HttpClient,
              private taskService: TaskService,
              private taskAddTimePipe: TaskAddTimePipe
              ) {
                this.addedTime = ''; 
               }

  ngOnInit(): void {
    this.myForm = this.fb.group({
      taskinput: ''
    })
  }

  addTask(form: FormGroup): void {
    this.addedTime = this.taskAddTimePipe.transform();

    const sendData: AddTodo = {
      Task: form.value.taskinput,
      Status: false,
    };

    this.taskService.AddTask(sendData).subscribe((res) => {
      console.log("pasuxi", res)
      console.log(sendData);
      this.myForm.reset();
    })
  }

  onFormSubmit(form: FormGroup): void {
    this.addTask(form);
  }
}
