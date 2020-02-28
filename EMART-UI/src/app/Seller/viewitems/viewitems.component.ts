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
    //let id=this.itemform.value["id"];
    this.service.Deleteitem(id).subscribe(res=>{
      console.log('record deleted');
    },err=>{
      console.log(err);
    })
  }

}
