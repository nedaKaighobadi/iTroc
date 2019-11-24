import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginService } from './login.service';
import { Router } from '@angular/router';

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
  constructor(private loginService:LoginService,private formBuilder:FormBuilder,private router:Router) { }

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
  if(this.isSigningIn){
    this.loginService.getLogin({email:this.loginForm.value.username,password:this.loginForm.value.password}).subscribe(response=>
      {
        console.log(response);
        this.loginService.setUser(response.user);
        this.loginService.setToken(response.token);
        this.router.navigate(['/home']);
      });
  }
  if(this.isSigningUp==true){
    let isBuyer:boolean;
    let company:boolean;
    if(this.registerForm.value.userType=="buyer"){
      isBuyer=true;
    }
    else{
      isBuyer=false;
    }
    if(this.registerForm.value.type=="company"){
      company=true;
    }
    else{
      company=false;
    }
    if(this.registerForm.valid){
    let user={name:this.registerForm.value.name, phone: this.registerForm.value.phone,email: this.registerForm.value.email, password:this.registerForm.value.password,
    adress:this.registerForm.value.adress, isBuyer:isBuyer, company:company};
    this.loginService.register(user).subscribe(response=>{console.log(response);
      console.log(user);
      this.register();
    
    })
  }
  } 
}
public register(){
this.isSigningUp=!this.isSigningUp;
this.isSigningIn=!this.isSigningIn; 
}
}
