import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AddTodoRoutingModule } from './add-todo-routing.module';
import { AddTodoComponent } from './add-todo/add-todo.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TaskAddTimePipe } from '../task-addtime.pipe';

@NgModule({
  declarations: [
    AddTodoComponent,
    TaskAddTimePipe
  ],
  imports: [
    CommonModule,
    AddTodoRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class AddTodoModule { }
