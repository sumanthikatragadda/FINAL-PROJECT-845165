import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/Services/admin.service';
import { SubCategory } from 'src/app/Models/sub-category';

@Component({
  selector: 'app-view-sub-category',
  templateUrl: './view-sub-category.component.html',
  styleUrls: ['./view-sub-category.component.css']
})
export class ViewSubCategoryComponent implements OnInit {
list:SubCategory[];
  constructor(private service:AdminService) {
    this.service.GetAllSubCategories().subscribe(res=>{
      this.list=res;
      console.log(this.list);
    },err=>{
      console.log(err)
    })
   }

  ngOnInit() {

  }
  Delete(id:any)
  {
   
    this.service.DeleteCategory(id).subscribe(res=>{
      console.log('Record Deleted');
    },err=>{
      console.log(err);
    })
  }


}
