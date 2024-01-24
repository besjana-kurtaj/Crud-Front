import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from '../models/product.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private baseApiUrl: string="https://localhost:7104/api/Product";
  private apiUrl = 'https://localhost:7104/api/Product/Create'; // Adjust the URL
  private incrementalCounter = 1;
  constructor(private http: HttpClient) { }
  getAllProduct():Observable<Product[]>{
   
  return this.http.get<Product[]>(this.baseApiUrl+'/List')
  }
  addProduct(product: Product): Observable<any> {
    product.id=this.generateGuid().toString()
    return this.http.post(this.apiUrl, product);
  }
  deleteProduct(id: any): Observable<any> {
    return this.http.delete(`${this.baseApiUrl}/${id}`);
  }
  updateProduct(id: any, product: any): Observable<any> {
    return this.http.put<any>(`${this.baseApiUrl}/${id}`, product);
  }
getProductById(id: any): Observable<Product> {
  return this.http.get<Product>(`${this.baseApiUrl}/${id}`);
}
  // editProduct(id: string):Observable<Product>{
  // return this.http.get<Product>(this.baseApiUrl+id);
  // }

  private generateGuid(): number {
    
    return Math.floor(Math.random() * 100) + 1;
  }
}
