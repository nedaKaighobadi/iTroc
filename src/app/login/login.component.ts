import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
 public isSigningIn:boolean=true;
 public isSigningUp:boolean=false;
 public loginForm:FormGroup;
 public registerForm:FormGroup;
  constructor(private formBuilder:FormBuilder) { }

  ngOnInit() {
    this.loginForm=this.formBuilder.group({
    username:['',Validators.required],
    password:['',Validators.required]
    });
    this.registerForm=this.formBuilder.group({
      name:['',Validators.required],
      phone:['',Validators.compose([Validators.pattern(/^\d{10}$/),Validators.required])],
      email:['',Validators.compose([Validators.email,Validators.required])],
      password:['',Validators.required],
      adress:['',Validators.required],
      userType:['',Validators.required],
      type:['',Validators.required]
    });
  }
public signIn(){
}
public register(){
  this.isSigningUp=!this.isSigningUp;
  this.isSigningIn=!this.isSigningIn;
  
}
}
