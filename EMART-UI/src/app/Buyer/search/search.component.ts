import { Component, OnInit } from '@angular/core';
import { BuyerService } from 'src/app/Services/buyer.service';
import { Items } from 'src/app/Models/items';
import { ItemService } from 'src/app/Services/item.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';

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
  this.items.itemname=this.searchform.value["itemname"];
  this.service.search(this.items.itemname).subscribe(res=>{
    this.list=res;
    console.log(this.list);
 
  }
  ,err=>{
    console.log(err);
  })
}
buy()
{
  this.router.navigateByUrl('buyer/buyproduct');
  
}
addtocart()
{

}

}
