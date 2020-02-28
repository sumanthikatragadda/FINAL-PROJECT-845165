import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BuyerComponent } from './Buyer/buyer/buyer.component';
import { BuyproductComponent } from './Buyer/buyproduct/buyproduct.component';
import { PurchasehistoryComponent } from './Buyer/purchasehistory/purchasehistory.component';
import { SearchComponent } from './Buyer/search/search.component';
import { ViewcartComponent } from './Buyer/viewcart/viewcart.component';
import { SellerComponent } from './Seller/seller/seller.component';
import { AdditemsComponent } from './Seller/additems/additems.component';
import { ViewitemsComponent } from './Seller/viewitems/viewitems.component';
import { ViewreportsComponent } from './Seller/viewreports/viewreports.component';
import { AdminComponent } from './Admin/admin/admin.component';
import { AddcategoryComponent } from './Admin/addcategory/addcategory.component';
import { AddsubcategoryComponent } from './Admin/addsubcategory/addsubcategory.component';
import { BlockunblockbuyerComponent } from './Admin/blockunblockbuyer/blockunblockbuyer.component';
import { BlockunblocksellerComponent } from './Admin/blockunblockseller/blockunblockseller.component';
import { DailyreportsComponent } from './Admin/dailyreports/dailyreports.component';
import { LoginComponent } from './Account/login/login.component';
import { RegisterbuyerComponent } from './Account/registerbuyer/registerbuyer.component';
import { RegistersellerComponent } from './Account/registerseller/registerseller.component';
import { HomeComponent } from './Account/home/home.component';
import { ViewProfileComponent } from './Buyer/view-profile/view-profile.component';
import { EditProfileComponent } from './Buyer/edit-profile/edit-profile.component';
import { ViewSellerProfileComponent } from './Seller/view-seller-profile/view-seller-profile.component';
import { EditSellerProfileComponent } from './Seller/edit-seller-profile/edit-seller-profile.component';

const routes: Routes = [
  {path:'buyer',component:BuyerComponent,children:[
    {path:'buyproduct',component:BuyproductComponent},
    {path:'purchasehistory',component:PurchasehistoryComponent},
    {path:'search',component:SearchComponent},
    {path:'viewcart',component:ViewcartComponent},
    {path:'view-profile',component:ViewProfileComponent},
    {path:'editprofile',component:EditProfileComponent}
  ]},
  {path:'seller',component:SellerComponent,children:[
    {path:'additems',component:AdditemsComponent},
    {path:'viewitems',component:ViewitemsComponent},
    {path:'viewreports',component:ViewreportsComponent},
    {path:'view-profile',component:ViewProfileComponent},
    {path:'view-seller-profile',component:ViewSellerProfileComponent},
    {path:'edit-seller-profile',component:EditSellerProfileComponent}
  ]},
  {path:'admin',component:AdminComponent,children:[
    {path:'addcategory',component:AddcategoryComponent},
    {path:'addsubcategory',component:AddsubcategoryComponent},
    {path:'blockunblockbuyer',component:BlockunblockbuyerComponent},
    {path:'blockunblockseller',component:BlockunblocksellerComponent},
    {path:'dailyreports',component:DailyreportsComponent}
  ]},
  {path:'home',component:HomeComponent,children:[
  {path:'login',component:LoginComponent},
  {path:'registerbuyer',component:RegisterbuyerComponent},
  {path:'registerseller',component:RegistersellerComponent}
  ]},
  {path:'',redirectTo:'home',pathMatch:"full"}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
