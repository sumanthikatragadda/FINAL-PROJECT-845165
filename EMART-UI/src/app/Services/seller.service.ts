import { Injectable } from '@angular/core';
import{HttpClient,HttpHeaders} from '@angular/common/http';
import{Observable} from "Rxjs";
import { Seller } from '../Models/seller';
const Requestheaders={headers:new HttpHeaders({
  'Content-Type':'application/json',

})}
@Injectable({
  providedIn: 'root'
})
export class SellerService {
url:string="http://localhost:63000/Seller/"
  constructor(private http:HttpClient) { }
  public GetSellerbyId(id:any):Observable<Seller>
  {
    return this.http.get<Seller>(this.url+'Getsellerbyid/'+id,Requestheaders);
  }
  public EditSellerProfile(item:Seller):Observable<any>
  {
    return this.http.put<any>(this.url+'Editseller/',JSON.stringify(item),Requestheaders);
  }
}
