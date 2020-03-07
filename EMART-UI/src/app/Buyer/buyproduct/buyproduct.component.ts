import { Component, OnInit } from '@angular/core';
import { Items } from 'src/app/Models/items';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { PurchaseHistory } from 'src/app/Models/purchase-history';
import { BuyerService } from 'src/app/Services/buyer.service';
import { ItemService } from 'src/app/Services/item.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-buyproduct',
  templateUrl: './buyproduct.component.html',
  styleUrls: ['./buyproduct.component.css']
})
export class BuyproductComponent implements OnInit {

  item:Items;
  list1:Items[];
  submitted=false;
  transaction:PurchaseHistory;
  buyproductform:FormGroup;
  constructor(private formbuilder:FormBuilder,private buyer:BuyerService,private items:ItemService,private route:Router)
  { 
    this.items.GetAllItems().subscribe(res=>
      {
        this.list1=res;
        console.log(this.list1);
      },
      err=>{
        console.log(err);
      });
  }


  ngOnInit() {
    this.buyproductform=this.formbuilder.group({
      itemName:[''],
      transactiontype:[''],
      cardnumber:[''],
      CVV:[''],
      ed:[''],
      name:[''],
      sellerid:[''],
      buyerid:[''],
      remarks:[''],
      numberofitems:[''],
      id:[''],
      datetime:['']
    })
   
    this.viewdata();
    
  }
  viewdata()
  {
    this.item=JSON.parse(localStorage.getItem('item1'));
    console.log(this.item);
    console.log(this.item.id);
    this.buyproductform.patchValue({
        itemName:this.item.itemName,
      
      
    })
  }
  purchase()
  {
    this.submitted= true;
    if(this.buyproductform.valid)
    {
      console.log(this.item);
      this.transaction=new PurchaseHistory();
      this.transaction.sellerid=this.item.sellerId;
      this.transaction.id=Number(this.item.id);
      this.transaction.numberofitems=Number(this.buyproductform.value["numberofitems"]);
      this.transaction.buyerid=Number(localStorage.getItem("bid"));
      this.transaction.datetime=this.buyproductform.value["datetime"];
      this.transaction.id=Math.round(Math.random()*100);
      this.transaction.itemid=Number(this.item.id);
      this.transaction.transactiontype=this.buyproductform.value["transactiontype"];
      this.transaction.remarks=this.buyproductform.value["remarks"];
    
      console.log(this.transaction)
      this.buyer.BuyItem(this.transaction).subscribe(res=>
        {
        
          console.log('Added succesfully');
        },err=>{console.log(err)}
  
        )
      }

  }

}
