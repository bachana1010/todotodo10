import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: "addtodo",
    loadChildren: () => import ('./add-todo/add-todo.module').then(item => item.AddTodoModule)
  },

{
  path: "incomplete",
  loadChildren: () => import('./complete-todo/complete-todo.module').then(item => item.CompleteTodoModule)
},
{
  path: "complete",
  loadChildren: () => import('./incomplete-todo/incomplete-todo.module').then(item => item.IncompleteTodoModule)
},

{
  path: "login",
  loadChildren: () => import('./login/login.module').then(item => item.LoginModule)
},
{
  path: "registration",
  loadChildren: () => import('./registration/registration.module').then(item => item.RegistrationModule)
},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
