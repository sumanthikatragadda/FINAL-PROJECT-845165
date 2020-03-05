import { Component, OnInit } from '@angular/core';
import{FormGroup, FormBuilder, Validators} from '@angular/forms'
import { AccountService } from 'src/app/Services/account.service';
import { Token } from 'src/app/Models/token';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit
 {
  loginForm:FormGroup;
   submit=false;
   username:any;
   password:any;
   role:any;
   
  constructor(private formbuiler:FormBuilder, private service:AccountService,private route:Router) {
    
   }

  ngOnInit() {
  this.loginForm=this.formbuiler.group({

  password:['',Validators.required],
username:['',Validators.required],
role:['',Validators.required]
   });
  }
  get f()
  {
    return this.loginForm.controls;
  }
  onsubmit()
  {
    this.submit=true;
    if(this.loginForm.valid)
    {
      this.Validate();
      alert("form is validated");
      console.log(JSON.stringify(this.loginForm.value))
    }
    //this.Validate();
    
  }
  public Validate()
{
  let username=this.loginForm.value['username'];
  let password=this.loginForm.value['password'];
  let role=this.loginForm.value['role'];
  // alert(username)
  // alert(role)
  if(role=='buyer')
{
  let token=new Token();
this.service.BuyerLogin(username,password).subscribe(res=>{token=res;console.log(token)
  if(token.message=="success"){
    localStorage.setItem('token',token.token)
    localStorage.setItem("id",token.bid.toString());  
    this.route.navigateByUrl("buyer")
  }
  else{
    alert("invalid");
  }
});
}
if(role=='seller')
{
 let token=new Token();
this.service.SellerLogin(username,password).subscribe(res=>{token=res;console.log(token)
  if(token.message=="success"){
    localStorage.setItem('token',token.token)
    localStorage.setItem("id",token.sid.toString());
    this.route.navigateByUrl("seller")
  }
  else{
    alert("invalid");
  }
});

}
if(username=="Admin" && password=="admin")
{
  this.route.navigateByUrl("admin");
 }

}
}

