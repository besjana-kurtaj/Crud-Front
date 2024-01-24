import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from 'src/app/Services/product.service';
import { Product } from 'src/app/models/product.model';

@Component({
  selector: 'app-list-product',
  templateUrl: './list-product.component.html',
  styleUrls: ['./list-product.component.css']
})
export class ListProductComponent {
  product: Product[]=[];
  /**
   *
   */
  constructor(private prodSeervices: ProductService,private router:Router) {
    
    
  }
  ngOnInit(): void {
this.prodSeervices.getAllProduct().subscribe({
  next:(prod)=>{
this.product=prod;  },
  error: (responese)=>
  {
    console.log(responese);
  }
});
  }
  onDeleteClick(id: any): void {
    this.prodSeervices.deleteProduct(id).subscribe(
      response => {
        // Handle success, e.g., refresh the product list
        alert("Product deleted")
        this.prodSeervices.getAllProduct().subscribe({
          next:(prod)=>{
        this.product=prod;  },
          error: (responese)=>
          {
            console.log(responese);
          }
        });
      },
      error => {
        // Handle error
        console.error('Error deleting product:', error);
      }
    );
  }
  addProduct(){
    this.router.navigate(['product/add'])  

  }
  editProduct(id: any) {
    this.router.navigate(['product/edit', id]);
  }
}
