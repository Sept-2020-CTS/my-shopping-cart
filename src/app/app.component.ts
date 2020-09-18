import { Component, ViewEncapsulation, OnInit } from '@angular/core';
import { ProductsComponent } from './products/products.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  //template: "Hello there",
  styleUrls: ['./app.component.css', './products/products.component.css'],
  encapsulation: ViewEncapsulation.Emulated
})
export class AppComponent implements OnInit {
  title = 'my-shopping-cart';

  user: string = 'User';

  

  ngOnInit() {
   
  }

  productsForToday: string[] = ["Apples", "Oranges"];

  updateUser() {
    let userName: string = "Subhrajit";
    console.log("Update User Called");
    this.user = userName;
  }

  pushNewProduct(eventData: { product: string }) {
    console.log("Pushed new product");
    this.productsForToday.push(eventData.product);

  }


}
