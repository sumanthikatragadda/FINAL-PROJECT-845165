import { Component, OnInit } from '@angular/core';
import { SellerService } from 'src/app/Services/seller.service';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Seller } from 'src/app/Models/seller';

@Component({
  selector: 'app-view-seller-profile',
  templateUrl: './view-seller-profile.component.html',
  styleUrls: ['./view-seller-profile.component.css']
})
export class ViewSellerProfileComponent implements OnInit {
 viewsellerform:FormGroup;
 seller:Seller;
 submit=false;
  constructor(private service:SellerService,private formbuilder:FormBuilder) { 
   
  }

  ngOnInit() {
    this.viewsellerform=this.formbuilder.group({
      username:['',[Validators.required]],
      companyname:['',[Validators.required,Validators.pattern('^[A-Z-a-z]{3,20}$')]],
      briefaboutcompany:['',[Validators.required,]],
      gstin:['',[Validators.required,]],
      postalAddress:['',[Validators.required,]],
      website:['',[Validators.required,]],
       contactnumber:['',[Validators.required,Validators.pattern('^[6-9][0-9]{9}$')]],
       emailid:['',[Validators.required,Validators.email]],
       password:['',[Validators.required]]
       
    });
    console.log("hii")
    let id=localStorage.getItem("sid");
    this.service.GetSellerbyId(id).subscribe(res=>{this.seller=res;
      console.log(this.seller)
      this.viewsellerform.setValue({ 
        username:this.seller.username,
        emailid:this.seller.emailid,
        password:this.seller.password,
        companyname:this.seller.companyname,
        gstin:this.seller.gstin,
        contactnumber:this.seller.contactnumber,
        briefaboutcompany:this.seller.briefaboutcompany,
        postalAddress:this.seller.postalAddress,
        website:this.seller.website,
      })
    });
    
  }
  get f()
  {
    return this.viewsellerform.controls;
  }
  onsubmit()
  {
    console.log("hii")
    this.submit=true;
    if(this.viewsellerform.valid)
    {
      this.Update();
      alert("form is validated");
  
    }
    
  }
  Update()
  {
    this.seller=new Seller();
    this.seller.id=Number(localStorage.getItem("sid"));
    this.seller.username=this.viewsellerform.value["username"];
    this.seller.password=this.viewsellerform.value["password"];
    this.seller.emailid=this.viewsellerform.value["emailid"];
    this.seller.contactnumber=this.viewsellerform.value["contactnumber"];
    this.seller.companyname=this.viewsellerform.value["companyname"];
    this.seller.gstin=this.viewsellerform.value["gstin"];
    this.seller.briefaboutcompany=this.viewsellerform.value["briefaboutcompany"];
    this.seller.website=this.viewsellerform.value["website"];
    this.seller.postalAddress=this.viewsellerform.value["postalAddress"];
    console.log(this.seller)
    this.service.EditSellerProfile(this.seller).subscribe(res=>{
      console.log("Record updated")
    },err=>{
      console.log(err)
    })

}
}
