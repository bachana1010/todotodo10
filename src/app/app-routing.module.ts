import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';

const routes: Routes = [
  {
    path: "addtodo",
    loadChildren: () => import ('./add-todo/add-todo.module').then(item => item.AddTodoModule)
  },

{
  path: "Todos",
  loadChildren: () => import('./complete-todo/complete-todo.module').then(item => item.CompleteTodoModule)
},

{
  path: "login",
  loadChildren: () => import('./login/login.module').then(item => item.LoginModule)
},
{
  path: "registration",
  loadChildren: () => import('./registration/registration.module').then(item => item.RegistrationModule)
},

{
  path: "myTodo",
  loadChildren: () => import('./my-todo/my-todo.module').then(item => item.MyTodoModule),
  canActivate: [AuthGuard]

},



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
