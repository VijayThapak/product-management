import { Component } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
    selector: 'app-product',
    standalone: true,
    imports: [HttpClientModule, CommonModule, ReactiveFormsModule],
    templateUrl: './product.component.html',
    styleUrl: './product.component.css'
})
export class ProductComponent {
    productsData: any[] = [];
    searchControl = new FormControl('');

    constructor(private productService: ProductService) { }


    ngOnInit() {
        this.productService.getProducts().subscribe(({ products }) => {
            this.productsData = products;
        })
    }

    searchProduct() {
        this.productService.searchProducts().subscribe(({ products }) => {
            this.productsData = products;
        })
    }
}
