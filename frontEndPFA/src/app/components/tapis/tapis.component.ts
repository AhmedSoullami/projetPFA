import { HttpErrorResponse } from '@angular/common/http';
import { Component,OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Tapis } from 'src/app/model/tapis.model';
import { TapisService } from 'src/app/services/tapis.service';
import Swal from 'sweetalert2';
import { ShowImageTapisComponent } from '../show-image-tapis/show-image-tapis.component';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';
@Component({
  selector: 'app-tapis',
  templateUrl: './tapis.component.html',
  styleUrls: ['./tapis.component.css']
})
export class TapisComponent implements OnInit {
  tapisDeatils!:Tapis[]
  constructor(private tapisService:TapisService,public imageDialog:MatDialog,private router:Router){}
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
        (response: Tapis[]) => {
          console.log(response);
          this.tapisDeatils = response;
          console.log(this.tapisDeatils)
        },
        (error: HttpErrorResponse) => {
          console.log(error);
        }
      );
  }
  
  
  
  deletetapis(tapis: any) {
    Swal.fire({
      title: 'Confirmation',
      text: 'Êtes-vous sûr de vouloir supprimer ce tapis ?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Oui, supprimer !'
    }).then((result) => {
      if (result.isConfirmed) {
        this.tapisService.deleteTapis(tapis.id).subscribe(
          (resp) => {
            this.getAllTapis();
            Swal.fire('Supprimé !', 'Le tapis a été supprimé.', 'success');
          },
          (error) => {
            console.error('Erreur lors de la suppression du tapis :', error);
            Swal.fire('Erreur', 'Une erreur s\'est produite lors de la suppression du tapis.', 'error');
          }
        );
      }
    });
  }
  editTapis(tapis:any){
    this.router.navigate(['/editTapis'])
    localStorage.setItem('idTapis',tapis.id)
  }
openImage(tapis: Tapis) {
  console.log(tapis);
  this.imageDialog.open(ShowImageTapisComponent, {
    data: {
      images: tapis.imageModels
    },
    height: '400px',
    width: '600px'
  });
}

  
  


}
