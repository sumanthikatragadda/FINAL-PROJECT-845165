import { Component, OnInit } from '@angular/core';
import { Buyer } from 'src/app/Models/buyer';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { BuyerService } from 'src/app/Services/buyer.service';

@Component({
  selector: 'app-view-profile',
  templateUrl: './view-profile.component.html',
  styleUrls: ['./view-profile.component.css']
})
export class ViewProfileComponent implements OnInit {
viewprofileForm:FormGroup;
submit=false;
item:Buyer;
  constructor(private service:BuyerService,private formbuilder:FormBuilder) {
   
  }

  ngOnInit() {
    this.viewprofileForm=this.formbuilder.group({
      username:['',[Validators.required,Validators.pattern('^[A-Z-a-z]{3,20}$')]],
       mobilenumber:['',[Validators.required,Validators.pattern('^[6-9][0-9]{9}$')]],
       emailid:['',[Validators.required,Validators.email]],
       password:['',Validators.required],
      
        });
        this.viewprofile();
  }
  viewprofile()
  {
    let id=localStorage.getItem("bid");
        this.service.GetbyId(id).subscribe(res=>{this.item=res;
          console.log(this.item)
          this.viewprofileForm.setValue({    
            username:this.item.username,
            mobilenumber:this.item.mobilenumber,
            emailid:this.item.emailid,
            password:this.item.password,
          })
        });
  }
  onsubmit()
  {
    this.submit=true;
    if(this.viewprofileForm.valid)
    {
      this.Update();
      alert("form is validated");
      console.log(JSON.stringify(this.viewprofileForm.value));
    }
    
  }
  Update()
  {
    this.item=new Buyer();
    this.item.id=Number(localStorage.getItem("id"));
    this.item.username=this.viewprofileForm.value["username"];
    this.item.password=this.viewprofileForm.value["password"];
    this.item.emailid=this.viewprofileForm.value["emailid"];
    this.item.mobilenumber=this.viewprofileForm.value["mobilenumber"];
    console.log(this.item);
    this.service.EditProfile(this.item).subscribe(res=>{
      console.log('Record Updated')
    })
  }
}
