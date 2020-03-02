import { Component, OnInit } from '@angular/core';
import{FormBuilder,FormGroup,Validators} from '@angular/forms';
import { AdminService } from 'src/app/Services/admin.service';
import { from } from 'rxjs';
import { SubCategory } from 'src/app/Models/sub-category';

@Component({
  selector: 'app-addsubcategory',
  templateUrl: './addsubcategory.component.html',
  styleUrls: ['./addsubcategory.component.css']
})
export class AddsubcategoryComponent implements OnInit {
  addsubcategoryform:FormGroup;
  submitted=false;
  list1:SubCategory[];
  item:SubCategory;
  constructor(private formbuilder:FormBuilder,private service:AdminService) { }

  ngOnInit() 
  {
    this.addsubcategoryform=this.formbuilder.group({

      subcategoryname:['',Validators.required],
      categoryid:['',Validators.required],
      GST:['',Validators.required],
      briefdetails:['',Validators.required],
    })
  }
  get f(){return this.addsubcategoryform.controls;}
  onSubmit()
  {
    this.submitted= true;
    this.Add();
    //display form value on success
    if(this.addsubcategoryform.valid)
    {
      alert("Success")
      console.log(JSON.stringify(this.addsubcategoryform.value));
      
    }

  }
  onReset() {
    this.submitted = false;
    this.addsubcategoryform.reset();
  }
  Add()
  {
     this.item=new SubCategory();
     this.item.categoryid=Math.round(Math.random()*100);
     this.item.subcategoryname=this.addsubcategoryform.value["subcategoryname"];
     this.item.briefdetails=this.addsubcategoryform.value["briefdetails"];
     this.item.GST=this.addsubcategoryform.value["GST"];
     this.item.categoryid=Number(this.addsubcategoryform.value["categoryid"]);
     
     this.service.AddSubCategory(this.item).subscribe(res=>{
       console.log('Record Added')
     },err=>{
       console.log(err)
     })
  }

}

