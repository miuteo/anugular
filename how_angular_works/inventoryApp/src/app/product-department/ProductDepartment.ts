import {Product} from "../product.model";
import {Component, Input} from "@angular/core";

@Component({
  selector: 'product-department',
  template: `<div class="product-department">
    <span *ngFor="let name of product.department; let i=index">
      <a href="#">{{name}}</a>
      <span>{{i<(product.department.length-1)? '>':''}}</span>
    </span>
  </div> `
})
export class ProductDepartment{
  @Input() product : Product
}