import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Items } from 'src/app/Models/items';
import { ItemService } from 'src/app/Services/item.service';

@Component({
  selector: 'app-additems',
  templateUrl: './additems.component.html',
  styleUrls: ['./additems.component.css']
})
export class AdditemsComponent implements OnInit {
  additemsform:FormGroup;
  submitted=false;
  list1:Items[];
  item:Items;
  constructor(private formbuilder:FormBuilder,private service:ItemService) { }

  ngOnInit() {
      this.additemsform=this.formbuilder.group({
      id:['',Validators.required],
      itemname:['',Validators.required],
      price:['',Validators.required],
      description:['',Validators.required],
      stocknumber:['',Validators.required],
      remarks:['',Validators.required],
      categoryid:['',Validators.required],
      subcategoryid:['',Validators.required],
      sellerid:['',Validators.required],
    })
  }
  get f(){return this.additemsform.controls;}
  onSubmit()
  {
    this.submitted= true;
    this.Add();
    //display form value on success
    if(this.additemsform.valid)
    {
      alert("Success")
      console.log(JSON.stringify(this.additemsform.value));
      
    }

  }
  onReset() {
    this.submitted = false;
    this.additemsform.reset();
  }
  Add()
  {
     this.item=new Items();
     this.item.id=Number(this.additemsform.value["id"]);
     this.item.itemname=this.additemsform.value["itemname"];
     this.item.price=this.additemsform.value["price"];
     this.item.description=this.additemsform.value["description"];
     this.item.remarks=this.additemsform.value["remarks"];
     this.item.stocknumber=this.additemsform.value["stocknumber"];
     this.item.categoryid=this.additemsform.value["categoryid"];
     this.item.subcategoryid=this.additemsform.value["subcategoryid"];
     this.item.sellerid=this.additemsform.value["sellerid"];
     this.service.AddItems(this.item).subscribe(res=>{
       console.log('Record Added')
     },err=>{
       console.log(err)
     })
  }

}
