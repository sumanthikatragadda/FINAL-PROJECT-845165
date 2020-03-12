import { Component, OnInit } from '@angular/core';
import { BuyerService } from 'src/app/Services/buyer.service';
import { Items } from 'src/app/Models/items';
import { ItemService } from 'src/app/Services/item.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Cart } from 'src/app/Models/cart';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  searchform:FormGroup;
list:Items[];
items:Items;
list1:Items[];
cart:Cart;
  constructor(private service:BuyerService,private itemservice:ItemService,private router:Router,
    private formbuilder:FormBuilder) { }

  ngOnInit() {
    this.searchform=this.formbuilder.group({
      itemname:['']
    })
   this.ViewItems();
  }
ViewItems()
{ 
  this.itemservice.GetAllItems().subscribe(res=>
    {
      this.list1=res;
      console.log(this.list1);
    },
    err=>{
      console.log(err);
    });
}
search()
{
  this.items=new Items();
  this.items.itemName=this.searchform.value["itemname"];
  this.service.search(this.items.itemName).subscribe(res=>{
    this.list=res;
    console.log(this.list);
 
  }
  ,err=>{
    console.log(err);
  })
}
buy(item2:Items)
{
  console.log(item2);
  localStorage.setItem('item1',JSON.stringify(item2));
  this.router.navigateByUrl('buyer/buyproduct');
  
}
AddToCart(item2:Items){
  //let itemlocal=JSON.stringify(localStorage.getItem("item1"));
  console.log(item2);
  let bid=localStorage.getItem('bid');
 this.cart=new Cart();
 this.cart.id=(Math.round(Math.random()*1000));
 this.cart.itemid=Number(item2.id);
 this.cart.categoryId=Number(item2.categoryId);
 this.cart.subcategoryId=Number(item2.subcategoryId);
 this.cart.sellerId=Number(item2.sellerId);
 this.cart.stockNumber=Number(item2.stockNumber);
  this.cart.itemName=item2.itemName;
  this.cart.price=Number(item2.price);
 this.cart.description=item2.description;
 this.cart.imagepath=item2.imagepath;
 this.cart.remarks=item2.remarks;
 this.cart.buyerId=Number(bid);
 console.log(this.cart);
 this.service.Addtocart(this.cart).subscribe(res=>{
   console.log("Record added To Cart");
   
 })
}

}
