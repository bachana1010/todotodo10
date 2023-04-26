import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {
  signupForm : FormGroup | any;
  public f = ''
  public sendSignupform: any = ""

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private authService: AuthService
  ) { }

  ngOnInit(): void {
    this.signupForm = this.formBuilder.group({
      username:["", Validators.required],
        email:["", [Validators.required, Validators.email]],
        password:["", [Validators.required]]
      }
    )
  }
  
  signUp(form: FormGroup) {
    console.log(form.value);
    this.sendSignupform = form.value;
    this.f = form.value.Text;
  
    this.authService.registerUser(this.sendSignupform).subscribe(
      (res) => {
        alert("registrer succsesfully");
        this.router.navigateByUrl("/login");
        console.log(res);
        this.signupForm.reset();
        console.log(form);
      },
      (err) => {
        if (err.status === 400 && err.error.error === "Email already registered") {
          alert("Registration failed: Email already registered.");}

        else if (err.status === 400 && err.error.error === "Username already taken") {
            alert("Registration failed: Username already taken.");

        } else {
          alert("Registration failed: " + err.statusText + ". try again");
        }
        this.signupForm.reset();
        console.log(err);
      }
    );
  }

}
