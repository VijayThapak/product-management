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
    selectControl = new FormControl('1');
    category = [{ name: "One", value: "1" }, { name: "Two", value: "2" }]

    constructor(private productService: ProductService) { }


    ngOnInit() {
        this.productService.getProducts().subscribe(({ products }) => {
            this.productsData = products;
        })
    }

    searchProduct() {
        console.log(this.searchControl.value, this.selectControl.value);
        this.productService.searchProducts(this.searchControl.value, this.selectControl.value).subscribe(({ products }) => {
            this.productsData = products;
        })
    }
}
