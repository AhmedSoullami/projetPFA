import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TapisService } from 'src/app/services/tapis.service';
import { map } from 'rxjs';
import { Tapis } from 'src/app/model/tapis.model';
@Component({
  selector: 'app-tapis-selectione',
  templateUrl: './tapis-selectione.component.html',
  styleUrls: ['./tapis-selectione.component.css']
})
export class TapisSelectioneComponent implements OnInit {
  selectedType: string = '';
  
  productDetails !:any [];

  constructor(private route: ActivatedRoute, private tapisService: TapisService,private router:Router) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.selectedType = params.get('type') || '';
      this.fetchTapis();
    });
  }

  fetchTapis(): void {
    this.tapisService.getTapisByType(this.selectedType).pipe(
      map((tapisList: Tapis[]) => tapisList.map((tapis: Tapis) => {
        if (tapis.imageModels) {
        
          return this.tapisService.createImages(tapis);
        }
        return tapis;
      }))
    ).
    subscribe(
      data => {
        this.productDetails = data;
        console.log(this.productDetails)
      },
      error => {
        console.error('Error fetching tapis:', error);
      }
    );
  }
  showDetails(tapis:any){
   
    this.router.navigateByUrl('/detailsTapis')
    localStorage.setItem('idTapis',tapis.id)
  }
 
}