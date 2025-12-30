import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ProductService } from './product.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './app.component.html'
})
export class AppComponent {
  products: any[] = [];
  product: any = {};
  editId: string | null = null;

  constructor(private service: ProductService) {
    this.loadProducts();
  }

  loadProducts() {
    this.service.getAll().subscribe(res => this.products = res);
  }

  save() {
    if (this.editId) {
      this.service.update(this.editId, this.product)
        .subscribe(() => this.reset());
    } else {
      this.service.add(this.product)
        .subscribe(() => this.reset());
    }
  }

  edit(p: any) {
    this.product = { ...p };
    this.editId = p._id;
  }

  delete(id: string) {
    this.service.delete(id)
      .subscribe(() => this.loadProducts());
  }

  reset() {
    this.product = {};
    this.editId = null;
    this.loadProducts();
  }
}
