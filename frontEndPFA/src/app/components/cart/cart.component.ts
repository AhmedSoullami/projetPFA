import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { map } from 'rxjs';
import { Tapis } from 'src/app/model/tapis.model';
import { CartService } from 'src/app/services/cart.service';
import { TapisService } from 'src/app/services/tapis.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cart: any; 
  productDetails !:any [];
  constructor(private cartService: CartService,private tapisService:TapisService,private router:Router) {}

  ngOnInit(): void {
    const idclient = localStorage.getItem('idclient');
  
    this.cartService.getCartsByIdUser(idclient).subscribe(
      (response: any) => {
        if (response && response.tapisList && Array.isArray(response.tapisList) && response.tapisList.length > 0) {
        
          this.productDetails = response.tapisList.map((tapis: Tapis) => {
            if (tapis.imageModels) {
              return this.tapisService.createImages(tapis);
            }
            return tapis;
          });
          console.log(this.productDetails);
          
        } else {
          console.error('Invalid response format. Expected a non-empty array in tapisList property:', response);
          
        }
      },
      (error: HttpErrorResponse) => {
        console.error('HTTP error:', error);
      
      }
    );
  }
  increaseQuantity(tapis: any): void {
    
    tapis.qty = (tapis.qty || 0) + 1;
    this.calculateTotalPrice();
  }
  
  decreaseQuantity(tapis: any): void {

    if (tapis.qty && tapis.qty > 0) {
      tapis.qty -= 1;
      this.calculateTotalPrice(); 
    }
  }
  
  

  

  calculateTotalPrice(): number {
    let totalPrice = 0;
  
    if (this.productDetails && this.productDetails.length > 0) {
      for (const tapis of this.productDetails) {
    
        const quantity = tapis.qty || 0;
        const price = tapis.price || 0;
  
        totalPrice += quantity * price;
      }
    }
  
    return totalPrice;
  }
  
  topayement(){
    const PrixTotal = localStorage.setItem("Total", this.calculateTotalPrice().toString());
    this.router.navigateByUrl("/payement")
    return PrixTotal
  }
  removeTapisFromCart(tapis: any): void {
    const idclient = localStorage.getItem('idclient');

    Swal.fire({
      title: 'Confirmation',
      text: 'Etes-vous sûr de vouloir supprimer ce Tapis du panier ?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Oui, supprimez-le!'
    }).then((result) => {
      if (result.isConfirmed) {
        this.cartService.removeTapisFromCart(idclient, tapis.id).subscribe(
          () => {
            
            const index = this.productDetails.indexOf(tapis);
            if (index !== -1) {
              this.productDetails.splice(index, 1);
            }

           
            this.calculateTotalPrice();

            
            Swal.fire('Supprimé!', 'Tapis a été supprimé du panier.', 'success');
          },
          (error: HttpErrorResponse) => {
            console.error('Error removing Tapis from cart:', error);

            
            Swal.fire('Error!', 'Impossible de retirer Tapis du panier.', 'error');
          }
        );
      }
    });
  }
 

  
  
}
