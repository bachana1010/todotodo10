import { FormBuilder, FormGroup, FormsModule } from '@angular/forms'; // Make sure to import FormsModule in the module where this component is declared
import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.scss']
})
export class AddTodoComponent implements OnInit {
  myForm: FormGroup | any;

  constructor(private fb: FormBuilder, private httpClient: HttpClient) { }

  ngOnInit(): void {
    this.myForm = this.fb.group({
      taskinput: ''
    })
  }

  addTask(form: FormGroup): void {
    console.log(form.value);
    const sendData = form.value;
  this.httpClient.post("http://127.0.0.1:8044/createtodo", sendData).subscribe((res) => {
    console.log(sendData);
    this.myForm.reset();


  })}

  onFormSubmit(form: FormGroup): void {
    this.addTask(form);
  }


}
