import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CompleteTodoRoutingModule } from './complete-todo-routing.module';
import { CompleteTodoComponent } from './complete-todo/complete-todo.component';


@NgModule({
  declarations: [
    CompleteTodoComponent
  ],
  imports: [
    CommonModule,
    CompleteTodoRoutingModule
  ]
})
export class CompleteTodoModule { }
