import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MyTodoRoutingModule } from './my-todo-routing.module';
import { MyTodocomponentComponent } from './my-todocomponent/my-todocomponent.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    MyTodocomponentComponent
  ],
  imports: [
    CommonModule,
    MyTodoRoutingModule,
    FormsModule
  ]
})
export class MyTodoModule { }
