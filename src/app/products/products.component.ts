import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  constructor() { }

  product: string = "Apple";

  @Output() sourceProductAdd = new EventEmitter<{product : string}>();

  ngOnInit(): void {
  }

  buyProduct(){
    console.log("Buy Products called");
    console.log ("product selected is : " , this.product);
    this.sourceProductAdd.emit({
      product : this.product
    });
  }
}
