import { Injectable } from '@angular/core';
import{HttpClient,HttpHeaders} from '@angular/common/http';
import{Observable} from "Rxjs";
import { Buyer } from '../Models/buyer';
import { Seller } from '../Models/seller';

const Requestheaders={headers:new HttpHeaders({
  'Content-Type':'application/json',

})}

@Injectable({
  providedIn: 'root'
})
export class AccountService {
url:string='http://localhost:63000/Account/'

  constructor(private http:HttpClient) {

   }

   public AddBuyer(item:Buyer):Observable<any>
  {
    return this.http.post<any>(this.url+'AddBuyer',item,Requestheaders);
    
  }
  public AddSeller(item:Seller):Observable<any>
  {
    return this.http.post<any>(this.url+'AddSeller',JSON.stringify(item),Requestheaders);
    
  }
  public BuyerLogin(username:any,password:any):Observable<any>
  {
    return this.http.get<any>(this.url+'BuyerLogin/'+username+'/'+password);
  }
  public SellerLogin(username:any,password:any):Observable<any>
  {
    return this.http.get<any>(this.url+'SellerLogin/'+username+'/'+password);
  }
}
