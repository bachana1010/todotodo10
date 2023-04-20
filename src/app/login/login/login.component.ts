import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup | any;
  sendLoginform: any


  constructor(private fb: FormBuilder, private httpClient: HttpClient) { }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: '',
      password: ""
      
    })
  }

  onSubmit(form: FormGroup){
    this.sendLoginform = form.value
    
    this.httpClient.post("http://127.0.0.1:8044/login", this.sendLoginform).subscribe(response => {

      console.log(response)
    });

    

        


     

  
  }
  }

  

