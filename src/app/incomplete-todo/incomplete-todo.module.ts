import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IncompleteTodoRoutingModule } from './incomplete-todo-routing.module';
import { IncompleteTodoComponent } from './incomplete-todo/incomplete-todo.component';


@NgModule({
  declarations: [
    IncompleteTodoComponent
  ],
  imports: [
    CommonModule,
    IncompleteTodoRoutingModule
  ]
})
export class IncompleteTodoModule { }
