import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { LoginService } from '../login/login.service';
import { Observable } from 'rxjs';
import { Product } from '../product';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  private url:string=environment.apiUrl;
 private token:string=this.loginService.getToken();
  constructor(private http:HttpClient,private loginService:LoginService) { }

public getCategories():Observable<any>{
  let header = {
    headers: new HttpHeaders({
      'auth-token': this.token
    })
  }
  return this.http.get<any>(this.url+"/categories",header)
}
public getSubcategories(id:string):Observable<any>{
  let header = {
    headers: new HttpHeaders({
      'auth-token': this.token
    })
  }
  return this.http.get<any>(this.url+"/subcategories/"+id,header)
}

public getProducts(size:number,page:number,category:string,subcategory:string,minPrice:number,maxPrice:number):Observable<any>{
  let header = {
    headers: new HttpHeaders({
      'auth-token': this.token
    }),
    params:{
      page:page.toString(),
      size:size.toString(),
      category:category,
      subcategory:subcategory,
      min:minPrice.toString(),
      max:maxPrice.toString()
    }
  }
  return this.http.get<any>(this.url+"/products",header)
}
public addProduct(product:Product):Observable<any>{
  let header = {
    headers: new HttpHeaders({
      'auth-token': this.token
    })}
    return this.http.post<any>(this.url+"/products",product,header)
}

}
