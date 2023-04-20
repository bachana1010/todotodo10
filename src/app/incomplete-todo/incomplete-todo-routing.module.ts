import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IncompleteTodoComponent } from './incomplete-todo/incomplete-todo.component';

const routes: Routes = [
  {
    path: '',
    component: IncompleteTodoComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IncompleteTodoRoutingModule { }
