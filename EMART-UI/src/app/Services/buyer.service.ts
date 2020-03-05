import { Injectable } from '@angular/core';
import{HttpClient,HttpHeaders} from '@angular/common/http';
import{Observable} from "Rxjs";
import { Buyer } from '../Models/buyer';
const Requestheaders={headers:new HttpHeaders({
  'Content-Type':'application/json',

})}
@Injectable({
  providedIn: 'root'
})
export class BuyerService {
url:string="http://localhost:63000/Buyer/"
  constructor(private http:HttpClient) { }
  public GetbyId(id:any):Observable<Buyer[]>
  {
    return this.http.get<Buyer[]>(this.url+'Getbyid/'+id,Requestheaders);
  }
  public EditProfile(item:Buyer):Observable<any>
  {
    return this.http.put<Buyer>(this.url+'Edit/',JSON.stringify(item),Requestheaders);
  }
}
