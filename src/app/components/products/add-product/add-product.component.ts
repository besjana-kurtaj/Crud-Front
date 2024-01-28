import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from 'src/app/Services/product.service';
import { Product } from 'src/app/models/product.model';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent {
  addProductRequest: Product={
    id:'',
    name:'',
    price:'',

  };
  constructor(private productService: ProductService, private router:Router) {
  
  }
  ngOnInit(): void {

  }
  addProduct() {
   // this.addProductRequest.id = this.generateRandomId();
    this.productService.addProduct(this.addProductRequest).subscribe({
      next: (prod) => {
        this.router.navigate(['product/list']);
      },
      error: (error) => {
        console.error('Error adding product:');
        
      }
    });
  }
  
  
// generateRandomId(): string {
//   const idLength = 4;
//   const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
//   let randomId = '';

//   for (let i = 0; i < idLength; i++) {
//     const randomIndex = Math.floor(Math.random() * characters.length);
//     randomId += characters.charAt(randomIndex);
//   }

//   return randomId;
// }

}
