import { Injectable } from '@angular/core';
import{HttpClient,HttpHeaders} from '@angular/common/http';
import{Observable} from "Rxjs";
import { Buyer } from '../Models/buyer';
import { PurchaseHistory } from '../Models/purchase-history';
import { Cart } from '../Models/cart';
const Requestheaders={headers:new HttpHeaders({
  'Content-Type':'application/json',

})}
@Injectable({
  providedIn: 'root'
})
export class BuyerService {
url:string="http://localhost:63000/Buyer/"
url1:string="http://localhost:63000/BuyerItem/"
url2:string="http://localhost:63000/BuyerTransaction/"

  constructor(private http:HttpClient) { }
  public GetbyId(id:any):Observable<Buyer>
  {
    return this.http.get<Buyer>(this.url+'Getbuyerbyid/'+id,Requestheaders);
  }
  public EditProfile(item:Buyer):Observable<any>
  {
    return this.http.put<Buyer>(this.url+'EditBuyerProfile/',JSON.stringify(item),Requestheaders);
  }
  public search(name:string):Observable<any>
  {
    return this.http.get(this.url1+'Search/'+name,Requestheaders);
  }
  public BuyItem(item:PurchaseHistory):Observable<PurchaseHistory>
  {
    return this.http.post<PurchaseHistory>(this.url2+'BuyItem/',JSON.stringify(item),Requestheaders);
    
  }
  public GetItem(id:any):Observable<PurchaseHistory>
  {
    return this.http.get<PurchaseHistory>(this.url2+'TransactionHistory/'+id,Requestheaders);
    
  }
  public Addtocart(item:Cart):Observable<Cart>
  {
    return this.http.post<Cart>(this.url2+'AddToCart/',JSON.stringify(item),Requestheaders);
    
  }
  public GetCart():Observable<Cart[]>
  {
    return this.http.get<Cart[]>(this.url2+'GetCart');
  }
  public DeleteCart(id:any):Observable<any>
  {
    return this.http.delete<any>(this.url+'DeleteCart/'+id,Requestheaders);
    
  }

}
