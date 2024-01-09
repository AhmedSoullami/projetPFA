// container.component.ts
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css']
})
export class ContainerComponent implements OnInit {
  slideIndex = 0; // Commencez à partir de la première image

  ngOnInit() {
    this.showSlides();
  }

  plusSlides(n: number) {
    this.slideIndex += n;
    this.showSlides();
  }

  showSlides() {
    let i;
    const slides = document.querySelectorAll('.mySlides') as NodeListOf<HTMLElement>;

    if (this.slideIndex >= slides.length) {
      this.slideIndex = 0; // Revenez à la première image après la dernière
    }

    if (this.slideIndex < 0) {
      this.slideIndex = slides.length - 1; // Passez à la dernière image après la première
    }

    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = 'none';
    }

    slides[this.slideIndex].style.display = 'block';

    setTimeout(() => {
      this.plusSlides(1); // Changez l'image toutes les X secondes (ajustez selon vos besoins)
    }, 4000); // Changez d'image toutes les 3 secondes dans cet exemple
  }
}
