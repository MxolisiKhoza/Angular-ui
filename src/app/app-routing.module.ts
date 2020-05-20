import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListProductDemoComponent } from './list-product-demo/list-product-demo.component';
import { CreateProductDemoComponent } from './create-product-demo/create-product-demo.component';
import { GetProductDemoComponent } from './get-product-demo/get-product-demo.component';

const routes: Routes = [
{path: '', redirectTo: 'product', pathMatch: 'full' },
{path: 'products', component: ListProductDemoComponent},
{path: 'addnew', component: CreateProductDemoComponent},
{path: 'findproduct/:id', component: GetProductDemoComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
