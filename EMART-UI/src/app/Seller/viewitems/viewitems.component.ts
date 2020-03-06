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

  }
  onsubmit()
  {
    this.submitted=true;
    
  }
  Delete(id:any)
  {

    this.service.Deleteitem(id).subscribe(res=>{
      console.log('record deleted');
    },err=>{
      console.log(err);
    })
  }
  Edit(id:string)
  {
    this.service.GetItems(id).subscribe(res=>{
      this.item=res;
      console.log(this.item);
      this.itemform.setValue({
        id:Number(this.item.id),
        itemName:this.item.itemname,
        price:Number(this.item.price),
        stockNumber:Number(this.item.stocknumber),
        description:this.item.description,
        remarks:this.item.remarks,
        categoryId:Number(this.item.categoryid),
        subcategoryId:Number(this.item.subcategoryid),
        sellerId:Number(this.item.sellerid)
        

      })
    })

}
Update()
  {
    this.item=new Items();
    this.item.id=this.itemform.value["id"];
     this.item.categoryid=this.itemform.value["categoryId"];
    this.item.subcategoryid=this.itemform.value["subcategoryId"];
    this.item.price=Number(this.itemform.value["price"]);
    this.item.itemname=this.itemform.value["itemName"];
    this.item.description=this.itemform.value["description"];
    this.item.stocknumber=Number(this.itemform.value["stockNumber"]);
    this.item.remarks=this.itemform.value["remarks"];
     this.item.sellerid=this.itemform.value["sellerId"];
    console.log(this.item);
    this.service.Update(this.item).subscribe(res=>
      {
        console.log('record updated')
      })
}
}
