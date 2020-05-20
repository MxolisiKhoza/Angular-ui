import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import { ProductDemo } from './product-demo';

@Injectable({
  providedIn: 'root'
})
export class ProductDemoService {
  private baseUrl = 'http://localhost:9018';


  constructor(private http: HttpClient) { }

  getProduct(id: number): Observable<ProductDemo> {
    return this.http.get<ProductDemo>(`${this.baseUrl}/findproduct/${id}`);
  }

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  addProduct(product: ProductDemo): Observable<ProductDemo> {
    return this.http.post<ProductDemo>(`${this.baseUrl}/${'addnew'}`,product, this.httpOptions);
  }

  getProductList(): Observable<ProductDemo[]> {
    return this.http.get<ProductDemo[]>(`${this.baseUrl}/${'productList'}`);
  }
}
