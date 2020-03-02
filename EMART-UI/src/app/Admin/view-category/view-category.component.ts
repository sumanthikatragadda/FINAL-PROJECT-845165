import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Category } from 'src/app/Models/category';
import { AdminService } from 'src/app/Services/admin.service';

@Component({
  selector: 'app-view-category',
  templateUrl: './view-category.component.html',
  styleUrls: ['./view-category.component.css']
})
export class ViewCategoryComponent implements OnInit {
  viewform:FormGroup;
  submitted=false;
  list:Category[];
  item:Category;
  constructor(private service:AdminService, private formbuilder:FormBuilder) { 
    this.service.GetAllCategories().subscribe(res=>{
      this.list=res;
      console.log(this.list);
    },err=>{
      console.log(err)
    })
  }

  ngOnInit() {
    // this.viewform=this.formbuilder.group({
    //   categoryid:['',[Validators.required,Validators.pattern("^[0-9]$")]],
    //   categoryname:['',Validators.required],
    //   briefdetails:['',Validators.required],
     
    //   })
  }
  // Update()
  // {
  //   this.item=new Category();
  //   this.item.categoryid=this.viewform.value["categoryid"];
  //   this.item.categoryname=this.viewform.value["categoryname"];
  //   this.item.briefdetails=this.viewform.value["briefdetails"];
   
   
  //   console.log(this.item);
  //   this.service.UpdateCategory(this.item).subscribe(res=>{
  //     console.log('Record Updated')
  //   })
  // }
  Delete(id:any)
  {
   
    this.service.DeleteCategory(id).subscribe(res=>{
      console.log('Record Deleted');
    },err=>{
      console.log(err);
    })
  }

}


