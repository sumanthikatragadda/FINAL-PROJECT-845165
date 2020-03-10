import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Items } from 'src/app/Models/items';
import { ItemService } from 'src/app/Services/item.service';
import { Category } from 'src/app/Models/category';
import { SubCategory } from 'src/app/Models/sub-category';

@Component({
  selector: 'app-additems',
  templateUrl: './additems.component.html',
  styleUrls: ['./additems.component.css']
})
export class AdditemsComponent implements OnInit {
  additemsform:FormGroup;
  submitted=false;
  clist:Category[];
  sblist:SubCategory[];
  list1:Items[];
  item:Items;
  cid:any;
  sub:SubCategory;
  image:string;
  constructor(private formbuilder:FormBuilder,private service:ItemService) {
   this.sub=new SubCategory();
    this.service.GetAllCategories().subscribe(res=>{
      this.clist=res;
      console.log(this.clist);
    })
   }

  ngOnInit() {
      this.additemsform=this.formbuilder.group({
      id:[''],
      itemname:['',Validators.required],
      price:['',Validators.required],
      description:['',Validators.required],
      stocknumber:['',Validators.required],
      remarks:['',Validators.required],
      categoryid:[''],
      subcategoryid:[''],
      sellerid:[''],
      imagepath:['']
    })
  }
  get f(){return this.additemsform.controls;}
  onSubmit()
  {
    this.submitted= true;
    if(this.additemsform.valid)
    {
      this.Add();
      
    }
    else{
      console.log("failed");
    }

  }
  onReset() {
    this.submitted = false;
    this.additemsform.reset();
  }
  Add()
  {
     this.item=new Items();
     this.item.id=Math.round(Math.random()*100);
     this.item.itemName=this.additemsform.value["itemname"];
     this.item.price=this.additemsform.value["price"];
     this.item.description=this.additemsform.value["description"];
     this.item.remarks=this.additemsform.value["remarks"];
     this.item.stockNumber=this.additemsform.value["stocknumber"];
     this.item.categoryId=Number(this.additemsform.value["categoryid"]);
     this.item.subcategoryId=Number(this.additemsform.value["subcategoryid"]);
     this.item.sellerId=Number(localStorage.getItem("sid"));
     this.item.imagepath=this.image;
     console.log(this.item)
     this.service.AddItems(this.item).subscribe(res=>{
       console.log('Record Added')
     },err=>{
       console.log(err)
     })
  }
  GetSubCategory()
  {
    let cid=this.additemsform.value["categoryid"];
    console.log(cid);
    this.service.GetAllSubCategories(cid).subscribe(res=>{
      this.sblist=res;
      console.log(this.sblist);
    })
  }
  fileEvent(event){
    this.image = event.target.files[0].name;
}


}
