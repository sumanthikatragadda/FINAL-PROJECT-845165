import { Injectable } from '@angular/core';
import{HttpClient,HttpHeaders} from '@angular/common/http';
import{Observable} from "Rxjs";
import { Items } from '../Models/items';
const Requestheaders={headers:new HttpHeaders({
  'Content-Type':'application/json',

})}

@Injectable({
  providedIn: 'root'
})
export class ItemService {
url:string='http://localhost:63000/SellerItem/'
  constructor(private http:HttpClient) { }
  public AddItems(item:Items):Observable<any>
  {
    return this.http.post<any>(this.url+'Add',item,Requestheaders);
    
  }
  public GetAllItems():Observable<Items[]>
  {
    return this.http.get<Items[]>(this.url+'GetAllItems');
  }
  public Deleteitem(id:any):Observable<any>
  {
    return this.http.delete<any>(this.url+'Delete/'+id,Requestheaders);
    
  }
}
