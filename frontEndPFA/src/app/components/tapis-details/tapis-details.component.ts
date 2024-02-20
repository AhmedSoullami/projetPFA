import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Tapis } from 'src/app/model/tapis.model';
import { CartService } from 'src/app/services/cart.service';
import { LoginService } from 'src/app/services/login.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-tapis-details',
  templateUrl: './tapis-details.component.html',
  styleUrls: ['./tapis-details.component.css']
})
export class TapisDetailsComponent implements OnInit {
  isLoggedIn!: boolean;
  product!: Tapis;
  selectedProductIndex = 0;
  cartCount: any = 0;
  constructor(
    private activatedRoute: ActivatedRoute,
    private cartService: CartService,
    private login: LoginService,
    private route: Router
  ) {}

  ngOnInit(): void {
    this.product = this.activatedRoute.snapshot.data['product'];

    this.login.isAuthenticated$.subscribe((authenticated: boolean) => {
      this.isLoggedIn = authenticated;
    });
  }

  addToCart(product: any) {
    this.cartCount++;
    localStorage.setItem('count', this.cartCount.toString());
    const idclient = localStorage.getItem('idclient');
    console.log(idclient);
    console.log(product.id);
  
    if (this.isLoggedIn) {
      this.cartService.addTapisToCart(idclient, product.id).subscribe({
        next: (response) => {
          this.product = this.activatedRoute.snapshot.data['product'];
          console.log('Product added to the cart:', this.product);
  
          // Afficher une boîte de dialogue de confirmation
          Swal.fire({
            icon: 'success',
            title: 'Product added to the cart!',
            showConfirmButton: false,
            timer: 1500, // Durée en millisecondes pendant laquelle la boîte de dialogue sera affichée
          });
        },
        error: (error) => {
          console.error('Error adding product to the cart:', error);
  
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Error adding product to the cart!',
          });
        },
      });
    } else {
      this.route.navigateByUrl('/login');
    }
  }

  changeIndex(index: any) {
    this.selectedProductIndex = index;
  }

  buyProduct() {
    this.route.navigateByUrl('/home')
  }
}
