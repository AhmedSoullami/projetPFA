import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Route, Router } from '@angular/router';
import { PaimentService } from 'src/app/services/paiment.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-payement',
  templateUrl: './payement.component.html',
  styleUrls: ['./payement.component.css']
})
export class PayementComponent implements OnInit {
  paymentForm!: FormGroup;
  selectedPaymentMethod: string = 'creditCard';
  totalAmount = localStorage.getItem('Total');
  user_id = localStorage.getItem('idclient');

  constructor(private fb: FormBuilder, private paymentService: PaimentService,private route:Router) {}

  ngOnInit(): void {
    this.paymentForm = this.fb.group({
      cardNumber: ['', [Validators.required, Validators.pattern(/^\d{16}$/)]],
      expirationDate: ['', [Validators.required, Validators.pattern(/^(0[1-9]|1[0-2])\/\d{2}$/)]],
      securityCode: ['', [Validators.required, Validators.pattern(/^\d{3,4}$/)]],
      cardName: ['', [Validators.required]],
    });
  }

  makePayment(): void {
    console.log('Total Amount:', this.totalAmount);
    console.log('User ID:', this.user_id);
    console.log('Credit Card Form:', this.paymentForm.value);
  
    if (this.paymentForm.valid) {
      const paymentData = {
        ...this.paymentForm.value,
        totalAmount: this.totalAmount,
        user: { id: this.user_id } 
      };
  
      if (this.selectedPaymentMethod === 'creditCard') {
        this.paymentService.processCreditCardPayment(paymentData).subscribe(
          (response) => {
            console.log('Credit card payment successful:', response);
            this.showCongratulationMessage();
            this.route.navigateByUrl("/home")
          },
          (error) => {
            console.error('Error processing credit card payment:', error);
          }
        );
      } else if (this.selectedPaymentMethod === 'paypal') {
        // Implement PayPal payment logic here
      } else {
        console.error('Invalid payment method selected');
      }
    } else {
      console.error('Form is not valid. Please check your inputs.');
      console.log('Card Number Errors:', this.paymentForm.get('cardNumber')?.errors?.['pattern']);
      console.log('Expiration Date Errors:', this.paymentForm.get('expirationDate')?.errors?.['pattern']);
      console.log('Security Code Errors:', this.paymentForm.get('securityCode')?.errors?.['pattern']);
      console.log('Card Name Errors:', this.paymentForm.get('cardName')?.errors);
    }
  }
  private showCongratulationMessage(): void {
    Swal.fire({
      icon: 'success',
      title: 'Congratulations!',
      text: 'Your payment was successful. Thank you!',
    });
  }
}
