import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class ProductService {
  api = 'http://localhost:3000/api/products';

  constructor(private http: HttpClient) {}

  getAll() {
    return this.http.get<any[]>(this.api);
  }

  add(product: any) {
    return this.http.post(this.api, product);
  }

  update(id: string, product: any) {
    return this.http.put(`${this.api}/${id}`, product);
  }

  delete(id: string) {
    return this.http.delete(`${this.api}/${id}`);
  }
}
