import { Component ,OnInit} from '@angular/core';
import { FormBuilder, FormGroup,Validators } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';
import { FileHandle } from 'src/app/model/file-handle.model';
import { Tapis } from 'src/app/model/tapis.model';
import { TapisService } from 'src/app/services/tapis.service';
import { NgForm } from '@angular/forms';
import { HttpErrorResponse } from '@angular/common/http';
@Component({
  selector: 'app-ajouter-tapis',
  templateUrl: './ajouter-tapis.component.html',
  styleUrls: ['./ajouter-tapis.component.css']
})
export class AjouterTapisComponent implements OnInit{
  tapis :Tapis={
    type:"",
    description:"",
    price:0,
    imageModels:[]
  }
  tapisForm!: NgForm;
  constructor(private fb:FormBuilder,private tapisService:TapisService,private sanitizer:DomSanitizer){}
  ngOnInit(): void {
   
  }
  onFileSelected(event: Event): void {
    if (event.target instanceof HTMLInputElement) {
      const file = event.target.files?.[0];
      if (file) {
        const fileHandle: FileHandle = {
          file: file,
          url: this.sanitizer.bypassSecurityTrustUrl(window.URL.createObjectURL(file)),
        };
        this.tapis.imageModels.push(fileHandle);
      }
    }
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
  
  addProduct (tapisForm: NgForm) {
    const productFormData= this.prepareFormData(this.tapis);
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
