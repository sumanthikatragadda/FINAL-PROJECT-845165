import { Component, OnInit } from '@angular/core';
import { Items } from 'src/app/Models/items';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ItemService } from 'src/app/Services/item.service';

@Component({
  selector: 'app-viewitems',
  templateUrl: './viewitems.component.html',
  styleUrls: ['./viewitems.component.css']
})
export class ViewitemsComponent implements OnInit {
  itemform:FormGroup;
  submitted=false;
  list:Items[];
  item:Items;
  constructor(private formbuilder:FormBuilder,private service:ItemService) { 

  this.service.GetAllItems().subscribe(res=>{
      this.list=res;
      console.log(this.list);
    },err=>{
      console.log(err)
    })
  }
  ngOnInit() {
    this.itemform=this.formbuilder.group({
      
      itemName:[''],
      price:[''],
      stockNumber:[''],
      description:[''],
      remarks:[''],
      

    })

  }
 
  Delete(id:any)
  {

    this.service.Deleteitem(id).subscribe(res=>{
      console.log('record deleted');
    },err=>{
      console.log(err);
    })
  }
  get f()
  {
    return this.itemform.controls;
  }
  Edit(id:number)
  {
    this.service.GetItems(id).subscribe(res=>{
      this.item=res;
      console.log(this.item);
      this.itemform.patchValue({
        itemName:this.item.itemName,
        price:Number(this.item.price),
        stockNumber:Number(this.item.stockNumber),
        description:this.item.description,
        remarks:this.item.remarks
      
      })
    });

}
Update()
  {
  
    this.item.sellerId=Number(localStorage.getItem("sid"));
    this.item.price=Number(this.itemform.value["price"]);
    this.item.itemName=this.itemform.value["itemName"];
    this.item.description=this.itemform.value["description"];
    this.item.stockNumber=Number(this.itemform.value["stockNumber"]);
    this.item.remarks=this.itemform.value["remarks"];
    console.log(this.item);
    this.service.Update(this.item).subscribe(res=>
      {
        console.log('record updated')
      })
}
}
