import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup | any;
  sendLoginform: any
  isAuthorized = false



  constructor(private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
    ) { }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: '',
      password: ""
      
    })
  }

  onSubmit(form: FormGroup) {
    // this.isAuthorized = true
    this.sendLoginform = form.value;
  
    this.authService.loginUser(this.sendLoginform).subscribe(
      (response) => {
        alert("logined succsesfully")
        this.isAuthorized = true
        let InformationToken = response.token

        localStorage.setItem('Authorization',InformationToken)
        this.router.navigateByUrl('/myTodo')
        this.loginForm.reset()
        console.log(response);
        console.log(response);
        // You may want to save the token in local storage or handle it in another way.
      },
      (error) => {
        alert("login failed: " + error.statusText + ". try again")
        this.loginForm.reset()

        console.log(error);
        // Handle errors like displaying an error message to the user.
      }
    );
  }
  


  }

  

