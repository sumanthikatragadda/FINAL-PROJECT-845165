import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-registerbuyer',
  templateUrl: './registerbuyer.component.html',
  styleUrls: ['./registerbuyer.component.css']
})
export class RegisterbuyerComponent implements OnInit {
  registerForm:FormGroup;
  submit=false;
  constructor(private formbuilder:FormBuilder) {

   }

  ngOnInit() {
    this.registerForm=this.formbuilder.group({
      id:['',Validators.required,Validators],
      name:['',[Validators.required,Validators.pattern('^[A-Z-a-z]{3,20}$')]],
       cdate:['',Validators.required],
       mobile:['',[Validators.required,Validators.pattern('^[6-9][0-9]{9}$')]],
       email:['',[Validators.required,Validators.email]],
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
  }
  onreset()
  {
      this.submit=false;
      this.registerForm.reset();
  }

}

