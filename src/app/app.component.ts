import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  //template: "Hello there",
  styleUrls: ['./app.component.css', './products/products.component.css']
})
export class AppComponent {
  title = 'my-shopping-cart';

  user: string = 'User';

  productsForToday: string[] = ["Apples", "Oranges"];

  updateUser() {
    let userName: string = "Subhrajit";
    console.log("Update User Called");
    this.user = userName;
  }

  pushNewProduct(eventData: {product : string}) {
    console.log("Pushed new product");
    this.productsForToday.push(eventData.product);
  }
}
