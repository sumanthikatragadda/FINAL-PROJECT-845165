import { Component, OnInit } from '@angular/core';
import { PurchaseHistory } from 'src/app/Models/purchase-history';
import { BuyerService } from 'src/app/Services/buyer.service';

@Component({
  selector: 'app-purchasehistory',
  templateUrl: './purchasehistory.component.html',
  styleUrls: ['./purchasehistory.component.css']
})
export class PurchasehistoryComponent implements OnInit {
list:PurchaseHistory;
  constructor(private service:BuyerService) { 
    let id=Number(localStorage.getItem("bid"));
    this.service.GetItem(id).subscribe(res=>{this.list=res;
      console.log(this.list);
    })
  }

  ngOnInit() {
  }

}
