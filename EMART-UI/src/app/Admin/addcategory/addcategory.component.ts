import { Component, OnInit } from '@angular/core';
import{FormBuilder,FormGroup,Validators} from '@angular/forms';
import { Category } from 'src/app/Models/category';
import { AdminService } from 'src/app/Services/admin.service';

@Component({
  selector: 'app-addcategory',
  templateUrl: './addcategory.component.html',
  styleUrls: ['./addcategory.component.css']
})
export class AddcategoryComponent implements OnInit {
  addcategoryform:FormGroup;
  submitted=false;
  list1:Category[];
  item:Category;
  constructor(private formbuilder:FormBuilder,private service:AdminService) { }

  ngOnInit() 
  {
    this.addcategoryform=this.formbuilder.group({
      categoryid:['',Validators.required],
      categoryname:['',Validators.required],
      briefdetails:['',Validators.required],
    })
  }
  get f(){return this.addcategoryform.controls;}
  onSubmit()
  {
    this.submitted= true;
    this.Add();
    //display form value on success
    if(this.addcategoryform.valid)
    {
      alert("Success")
      console.log(JSON.stringify(this.addcategoryform.value));
      
    }

  }
  onReset() {
    this.submitted = false;
    this.addcategoryform.reset();
  }
  Add()
  {
     this.item=new Category();
     this.item.categoryid=Number(this.addcategoryform.value["categoryid"]);
     this.item.categoryname=this.addcategoryform.value["categoryname"];
     this.item.briefdetails=this.addcategoryform.value["briefdetails"];
     this.service.AddCategory(this.item).subscribe(res=>{
       console.log('Record Added')
     },err=>{
       console.log(err)
     })
  }
}
