import { Component, OnInit } from '@angular/core';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';
import { Seller } from 'src/app/Models/seller';
import { AccountService } from 'src/app/Services/account.service';

@Component({
  selector: 'app-registerseller',
  templateUrl: './registerseller.component.html',
  styleUrls: ['./registerseller.component.css']
})
export class RegistersellerComponent implements OnInit{

  sellerform:FormGroup;
  submit=false;
  seller:Seller;
  list:Seller[];
  constructor(private formbuilder:FormBuilder,private service:AccountService) { }

  ngOnInit() {
    this.sellerform=this.formbuilder.group({
      id:['',Validators.required],
      username:['',[Validators.required,Validators.pattern('^[A-Z-a-z]{3,20}$')]],
      companyname:['',[Validators.required,Validators.pattern('^[A-Z-a-z]{3,20}$')]],
      briefaboutcompany:['',[Validators.required,]],
      GSTIN:['',[Validators.required,]],
      postaladdress:['',[Validators.required,]],
      website:['',[Validators.required,]],
       contactnumber:['',[Validators.required,Validators.pattern('^[6-9][0-9]{9}$')]],
       emailid:['',[Validators.required,Validators.email]],
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
    this.AddSeller();
  }
  // onreset()
  // {
  //     this.submit=false;
  //     this.sellerform.reset();
  // }
  AddSeller()
  {
    this.seller=new Seller();
    this.seller.id=Number(this.sellerform.value["id"]);
    this.seller.username=this.sellerform.value["username"];
    this.seller.password=this.sellerform.value["password"];
    this.seller.emailid=this.sellerform.value["emailid"];
    this.seller.contactnumber=this.sellerform.value["contactnumber"];
    this.seller.companyname=this.sellerform.value["companyname"];
    this.seller.GSTIN=this.sellerform.value["GSTIN"];
    this.seller.briefaboutcompany=this.sellerform.value["briefaboutcompany"];
    this.seller.website=this.sellerform.value["website"];
    this.seller.postaladdress=this.sellerform.value["postaladdress"];
    console.log(this.seller)
    this.service.AddSeller(this.seller).subscribe(res=>{
      console.log("Record added")
    },err=>{
      console.log(err)
    })
  }


}
