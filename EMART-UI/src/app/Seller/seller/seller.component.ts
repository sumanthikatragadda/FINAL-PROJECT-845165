import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-seller',
  templateUrl: './seller.component.html',
  styleUrls: ['./seller.component.css']
})
export class SellerComponent implements OnInit {

  constructor(private route:Router) {
    if(localStorage.getItem("sid"))
    {
         
    }
    else{
      this.route.navigateByUrl("home/login")
    }
   }

  ngOnInit() {
  }
  Logout()
  {
    localStorage.clear();
    this.route.navigateByUrl("home");
  }
}
