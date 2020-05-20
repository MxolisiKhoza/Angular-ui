import { Component, OnInit } from '@angular/core';
import { ProductDemo } from '../product-demo';
import { ProductDemoService } from '../product-demo.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-product-demo',
  templateUrl: './create-product-demo.component.html',
  styleUrls: ['./create-product-demo.component.css']
})
export class CreateProductDemoComponent implements OnInit {

  product: ProductDemo = new ProductDemo();
  submitted = false;
  
    constructor(private productService: ProductDemoService,
      private router:Router) { }
  
    ngOnInit() {
    }
  
    newProduct(): void {
      this.submitted = false;
      this.product = new ProductDemo();
    }
  
    save() {
      this.productService.addProduct(this.product)
      .subscribe(data => console.log(data),error => console.log(error));
      this.product = new ProductDemo();
      this.gotoList();
    }
  
    onSubmit() {
      this.submitted = true;
      this.save();
    }
  
    gotoList() {
      this.router.navigate(['/addnew']);
    }
  }
