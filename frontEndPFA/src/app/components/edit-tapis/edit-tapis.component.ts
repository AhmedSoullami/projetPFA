import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { FileHandle } from 'src/app/model/file-handle.model';
import { Tapis } from 'src/app/model/tapis.model';
import { TapisService } from 'src/app/services/tapis.service';

@Component({
  selector: 'app-edit-tapis',
  templateUrl: './edit-tapis.component.html',
  styleUrls: ['./edit-tapis.component.css']
})
export class EditTapisComponent implements OnInit {
  constructor(private activateRoute:ActivatedRoute,private tapisService:TapisService){}
  product:Tapis={
    type:"",
    description:"",
    price:0,
    imageModels:[]
  }
  
  ngOnInit(): void {
    this.product=this.activateRoute.snapshot.data['product']
  }
  removeImages(i: number) {
    this.product.imageModels.splice(i, 1);
  }

  onFileSelected(event: any): void {
   
    console.log(event);
  }
  fileDropped(event: any){

  }
  prepareFormData(tapis:Tapis):FormData{
    const formData=new FormData();
    formData.append('tapis',new Blob([JSON.stringify(tapis)],{type:'application/json'}));
    for(var i=0;i<tapis.imageModels.length;i++){
      formData.append('imageFile',
      tapis.imageModels[i].file,
      tapis.imageModels[i].file.name,
      )
    }
    return formData;
    
  }
  
  updateProduct (tapisForm: NgForm) {
    const productFormData= this.prepareFormData(this.product);
    this.tapisService.ajouterTapis(productFormData).subscribe(
      (response:Tapis)=>{
        tapisForm.reset();
      },
      (error:HttpErrorResponse)=>{
        console.log(error)
      }
      );
  }

}
