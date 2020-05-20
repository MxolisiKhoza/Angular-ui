import { Component, OnInit } from '@angular/core';
import { ProductDemo } from '../product-demo';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductDemoService } from '../product-demo.service';

@Component({
  selector: 'app-get-product-demo',
  templateUrl: './get-product-demo.component.html',
  styleUrls: ['./get-product-demo.component.css']
})
export class GetProductDemoComponent implements OnInit {

  id: number;
  product: ProductDemo;

  constructor(private route: ActivatedRoute, private router: Router,
    private productDemoService: ProductDemoService) { }

  ngOnInit() {
    this.product = new ProductDemo();
    this.id = this.route.snapshot.params['id'];

    this.productDemoService.getProduct(this.id)
    .subscribe(data => {
      console.log(data)
      this.product = data;
    }, error => console.log(error));
    
  }

}