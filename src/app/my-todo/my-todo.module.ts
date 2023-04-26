import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MyTodoRoutingModule } from './my-todo-routing.module';
import { MyTodocomponentComponent } from './my-todocomponent/my-todocomponent.component';


@NgModule({
  declarations: [
    MyTodocomponentComponent
  ],
  imports: [
    CommonModule,
    MyTodoRoutingModule
  ]
})
export class MyTodoModule { }
