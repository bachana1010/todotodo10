import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MyTodoRoutingModule } from './my-todo-routing.module';
import { MyTodocomponentComponent } from './my-todocomponent/my-todocomponent.component';
import { FormsModule } from '@angular/forms';
import { AppTaskStatusColorDirective } from '../app-task-status-color.directive';


@NgModule({
  declarations: [
    MyTodocomponentComponent,
    AppTaskStatusColorDirective
  ],
  imports: [
    CommonModule,
    MyTodoRoutingModule,
    FormsModule
  ]
})
export class MyTodoModule { }
