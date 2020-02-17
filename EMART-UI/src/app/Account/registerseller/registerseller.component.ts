import { Component, OnInit } from '@angular/core';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-registerseller',
  templateUrl: './registerseller.component.html',
  styleUrls: ['./registerseller.component.css']
})
export class RegistersellerComponent implements OnInit{

  sellerform:FormGroup;
  submit=false;

  constructor(private formbuilder:FormBuilder) { }

  ngOnInit() {
    this.sellerform=this.formbuilder.group({
      id:['',Validators.required,Validators],
      name:['',[Validators.required,Validators.pattern('^[A-Z-a-z]{3,20}$')]],
      cname:['',[Validators.required,Validators.pattern('^[A-Z-a-z]{3,20}$')]],
      brief:['',[Validators.required,]],
      gst:['',[Validators.required,]],
      address:['',[Validators.required,]],
      website:['',[Validators.required,]],
       mobile:['',[Validators.required,Validators.pattern('^[6-9][0-9]{9}$')]],
       email:['',[Validators.required,Validators.email]],
       password:['',[Validators.required]]
       
    });
  }
  get f()
  {
    return this.sellerform.controls;
  }
  onsubmit()
  {
    this.submit=true;
    if(this.sellerform.valid)
    {
    alert("form is validated");
    
    console.log(JSON.stringify(this.sellerform.value))
    }
  }
  onreset()
  {
      this.submit=false;
      this.sellerform.reset();
  }


}
