import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CompleteTodoComponent } from './complete-todo/complete-todo.component';

const routes: Routes = [
  {
    path: '',
    component: CompleteTodoComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CompleteTodoRoutingModule { }
