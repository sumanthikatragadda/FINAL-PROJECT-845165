import { Injectable } from '@angular/core';
import{HttpClient,HttpHeaders} from '@angular/common/http';
import{Observable} from "Rxjs";
import { Category } from '../Models/category';
import { SubCategory } from '../Models/sub-category';
const Requestheaders={headers:new HttpHeaders({
  'Content-Type':'application/json',

})}

@Injectable({
  providedIn: 'root'
})
export class AdminService {
url:string='http://localhost:63000/Admin/'
  constructor(private http:HttpClient) { }
  public AddCategory(item:Category):Observable<any>
  {
    return this.http.post<any>(this.url+'AddCategory',item,Requestheaders);
    
  }
  public AddSubCategory(item:SubCategory):Observable<any>
  {
    return this.http.post<any>(this.url+'AddSubCategory',JSON.stringify(item),Requestheaders);
    
  }
  public GetAllCategories():Observable<Category[]>
  {
    return this.http.get<Category[]>(this.url+'GetAllCategories');
  }
  public DeleteCategory(id:any):Observable<any>
  {
    return this.http.delete<any>(this.url+'DeleteCategory/'+id,Requestheaders);
    
  }
  public GetAllSubCategories():Observable<SubCategory[]>
  {
    return this.http.get<SubCategory[]>(this.url+'GetAllSubCategories');
  }
  public DeleteSubCategory(id:any):Observable<any>
  {
    return this.http.delete<any>(this.url+'DeleteSubCategory/'+id,Requestheaders);
    
  }
  public GetCategoryId(id:any):Observable<Category[]>
  {
    return this.http.get<Category[]>(this.url+'GetCategorybyid/'+id,Requestheaders);
  }
  public GetSubCategoryId(id:any):Observable<Category[]>
  {
    return this.http.get<Category[]>(this.url+'GetSubCategorybyid/'+id,Requestheaders);
  }
}
