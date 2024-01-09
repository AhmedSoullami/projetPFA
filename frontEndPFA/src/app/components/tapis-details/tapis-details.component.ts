import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Tapis } from 'src/app/model/tapis.model';

@Component({
  selector: 'app-tapis-details',
  templateUrl: './tapis-details.component.html',
  styleUrls: ['./tapis-details.component.css']
})
export class TapisDetailsComponent {
  product!:Tapis
  selectedProductIndex = 0;
  constructor(private activatedRoute:ActivatedRoute){}
  ngOnInit(): void {
    this.product = this.activatedRoute.snapshot.data['product'];
    console.log(this.product)
  }
  addToCart() {
    
  }

  changeIndex(index:any) {
    this.selectedProductIndex = index;
  }

  buyProduct() {
    
  }
}
