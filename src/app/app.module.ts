import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateProductDemoComponent } from './create-product-demo/create-product-demo.component';
import { ListProductDemoComponent } from './list-product-demo/list-product-demo.component';
import { GetProductDemoComponent } from './get-product-demo/get-product-demo.component';

@NgModule({
  declarations: [
    AppComponent,
    CreateProductDemoComponent,
    ListProductDemoComponent,
    GetProductDemoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
