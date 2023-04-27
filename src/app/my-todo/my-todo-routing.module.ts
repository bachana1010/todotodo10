import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MyTodocomponentComponent } from './my-todocomponent/my-todocomponent.component';

const routes: Routes = [
  {
    path: '',
    component: MyTodocomponentComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MyTodoRoutingModule { }
