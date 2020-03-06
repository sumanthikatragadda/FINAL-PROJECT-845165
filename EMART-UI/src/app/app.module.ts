import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import{HttpClientModule} from '@angular/common/http';
import{ReactiveFormsModule} from'@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BuyerComponent } from './Buyer/buyer/buyer.component';
import { SearchComponent } from './Buyer/search/search.component';
import { ViewcartComponent } from './Buyer/viewcart/viewcart.component';
import { PurchasehistoryComponent } from './Buyer/purchasehistory/purchasehistory.component';
import { BuyproductComponent } from './Buyer/buyproduct/buyproduct.component';
import { SellerComponent } from './Seller/seller/seller.component';
import { AdditemsComponent } from './Seller/additems/additems.component';
import { ViewitemsComponent } from './Seller/viewitems/viewitems.component';
import { ViewreportsComponent } from './Seller/viewreports/viewreports.component';
import { LoginComponent } from './Account/login/login.component';
import { RegisterbuyerComponent } from './Account/registerbuyer/registerbuyer.component';
import { RegistersellerComponent } from './Account/registerseller/registerseller.component';
import { AdminComponent } from './Admin/admin/admin.component';
import { BlockunblockbuyerComponent } from './Admin/blockunblockbuyer/blockunblockbuyer.component';
import { BlockunblocksellerComponent } from './Admin/blockunblockseller/blockunblockseller.component';
import { AddcategoryComponent } from './Admin/addcategory/addcategory.component';
import { AddsubcategoryComponent } from './Admin/addsubcategory/addsubcategory.component';
import { DailyreportsComponent } from './Admin/dailyreports/dailyreports.component';
import { from } from 'rxjs';
import { HomeComponent } from './Account/home/home.component';
import { ViewProfileComponent } from './Buyer/view-profile/view-profile.component';
import { ViewSellerProfileComponent } from './Seller/view-seller-profile/view-seller-profile.component';
import { EditSellerProfileComponent } from './Seller/edit-seller-profile/edit-seller-profile.component';
import { ViewCategoryComponent } from './Admin/view-category/view-category.component';
import { ViewSubCategoryComponent } from './Admin/view-sub-category/view-sub-category.component';

@NgModule({
  declarations: [
    AppComponent,
    BuyerComponent,
    SearchComponent,
    ViewcartComponent,
    PurchasehistoryComponent,
    BuyproductComponent,
    SellerComponent,
    AdditemsComponent,
    ViewitemsComponent,
    ViewreportsComponent,
    LoginComponent,
    RegisterbuyerComponent,
    RegistersellerComponent,
    AdminComponent,
    BlockunblockbuyerComponent,
    BlockunblocksellerComponent,
    AddcategoryComponent,
    AddsubcategoryComponent,
    DailyreportsComponent,
    HomeComponent,
    ViewProfileComponent,
    ViewSellerProfileComponent,
    EditSellerProfileComponent,
    ViewCategoryComponent,
    ViewSubCategoryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
