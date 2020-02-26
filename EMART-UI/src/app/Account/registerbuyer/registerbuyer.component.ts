import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Buyer } from 'src/app/Models/buyer';
import { AccountService } from 'src/app/Sevices/account.service';

@Component({
  selector: 'app-registerbuyer',
  templateUrl: './registerbuyer.component.html',
  styleUrls: ['./registerbuyer.component.css']
})
export class RegisterbuyerComponent implements OnInit {
  registerForm:FormGroup;
  submit=false;
  buyer:Buyer;
  list:Buyer[];
  constructor(private formbuilder:FormBuilder,private service:AccountService) {

   }

  ngOnInit() {
    this.registerForm=this.formbuilder.group({
      id:['',Validators.required,Validators],
      username:['',[Validators.required,Validators.pattern('^[A-Z-a-z]{3,20}$')]],
       createddatetime:['',Validators.required],
       mobilenumber:['',[Validators.required,Validators.pattern('^[6-9][0-9]{9}$')]],
       emailid:['',[Validators.required,Validators.email]],
       password:['',[Validators.required]]
        });
            
  }
  get f()
  {
    return this.registerForm.controls;
  }
  onsubmit()
  {
    this.submit=true;
    if(this.registerForm.valid)
    {
    alert("form is validated");
    
    console.log(JSON.stringify(this.registerForm.value))
    }
    this.AddBuyer();
  }
  // onreset()
  // {
  //     this.submit=false;
  //     this.registerForm.reset();
  // }
  AddBuyer()
  {
    this.buyer=new Buyer();
    this.buyer.id=Number(this.registerForm.value["id"]);
    this.buyer.username=this.registerForm.value["username"];
    this.buyer.password=this.registerForm.value["password"];
    this.buyer.emailid=this.registerForm.value["emailid"];
    this.buyer.mobilenumber=this.registerForm.value["mobilenumber"]
    this.buyer.createddatetime=this.registerForm.value["createddatetime"];
    console.log(this.buyer)
    this.service.AddBuyer(this.buyer).subscribe(res=>{
      console.log("Record added")
    },err=>{
      console.log(err)
    })
  }

}

