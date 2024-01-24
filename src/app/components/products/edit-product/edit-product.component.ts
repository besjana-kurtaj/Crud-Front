import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from 'src/app/Services/product.service';
import { Product } from 'src/app/models/product.model';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent {
  productId!: number;
  product: any;

  constructor(private route: ActivatedRoute, private productService: ProductService,private router:Router) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.productId = +params['id'];
      this.productService.getProductById(this.productId).subscribe(product => {
        this.product = product;
      });
    });
  }
  updateProduct() {
    this.productService.updateProduct(this.productId, this.product).subscribe(
      updatedProduct => {
        console.log('Product updated successfully:', updatedProduct);
        // Optionally, you can navigate back to the product list or perform other actions
        this.router.navigate(['/product/list']);
      },
      error => {
        console.error('Error updating product:', error);
        // Handle error scenarios as needed
      }
    );
  }
}
