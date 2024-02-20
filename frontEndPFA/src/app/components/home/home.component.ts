import { HttpErrorResponse } from '@angular/common/http';
import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { map } from 'rxjs';
import { Tapis } from 'src/app/model/tapis.model';
import { TapisService } from 'src/app/services/tapis.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{

  constructor(private tapisService:TapisService,private router: Router){}
  pageNumber: number = 0;

  productDetails !:any [];

  showLoadButton = false;
  ngOnInit(): void {
    this.getAllTapis()
  }
  getAllTapis() {
    this.tapisService.getAlltapis()
      .pipe(
        map((tapisList: Tapis[]) => tapisList.map((tapis: Tapis) => {
          if (tapis.imageModels) {
          
            return this.tapisService.createImages(tapis);
          }
          return tapis;
        }))
      )
      .subscribe(
        (response: any[]) => {
          console.log(response);
          this.productDetails = response;
          console.log(this.productDetails)
        },
        (error: HttpErrorResponse) => {
          console.log(error);
        }
      );
  }
  showDetails(tapis:any){
   
    this.router.navigateByUrl('/detailsTapis')
    localStorage.setItem('idTapis',tapis.id)
  }
 

}
