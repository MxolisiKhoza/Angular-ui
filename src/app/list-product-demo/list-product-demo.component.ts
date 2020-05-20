import { Component, OnInit } from '@angular/core';
import { ProductDemo } from '../product-demo';
import { ProductDemoService } from '../product-demo.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-product-demo',
  templateUrl: './list-product-demo.component.html',
  styleUrls: ['./list-product-demo.component.css']
})
export class ListProductDemoComponent implements OnInit {
  products: ProductDemo[];

  constructor(private productService: ProductDemoService,
    private router: Router) { }

  ngOnInit() {
    this.reloadData();
  }
  reloadData(){
    this.productService.getProductList().subscribe(products => this.products = products);
  }

  ownerDetails(id: number){
    this.router.navigate(['findproduct', id]);
  }

}
