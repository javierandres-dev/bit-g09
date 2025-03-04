import { Component, OnInit, inject } from '@angular/core';
import { StoreApiService } from '../../services/store-api.service';

@Component({
  selector: 'app-products',
  imports: [],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css',
})
export class ProductsComponent implements OnInit {
  storeApiService = inject(StoreApiService);
  allProducts: any[] = [];

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts() {
    this.storeApiService.getAllProducts().subscribe((res: any) => {
      console.log('res:', res);
    });
  }
}
