import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Tapis } from '../model/tapis.model';
import { FileHandle } from '../model/file-handle.model';
import { DomSanitizer } from '@angular/platform-browser';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TapisService {
  constructor(private httpClient: HttpClient, private sanitizer: DomSanitizer) { }

  ajouterTapis(tapis: FormData) {
    return this.httpClient.post<Tapis>("http://localhost:9090/ajouterTapis", tapis);
  }

  getAlltapis() {
    return this.httpClient.get<Tapis[]>("http://localhost:9090/getAllTapis");
  }

  deleteTapis(tapisId: number) {
    return this.httpClient.delete(`http://localhost:9090/supprimerTapis/${tapisId}`);
  }

  public createImages(product: Tapis) {
    const productImages: any[] = product.imageModels;

    const productImagesToFileHandle: FileHandle[] = [];

    for (let i = 0; i < productImages.length; i++) {
      const imageFileData = productImages[i];

      const imageBlob = this.dataURItoBlob(imageFileData.picByte, imageFileData.type);

      const imageFile = new File([imageBlob], imageFileData.name, { type: imageFileData.type });

      const finalFileHandle :FileHandle = {
        file: imageFile,
        url: this.sanitizer.bypassSecurityTrustUrl(window.URL.createObjectURL(imageFile))
      };

      productImagesToFileHandle.push(finalFileHandle);
    }

    product.imageModels = productImagesToFileHandle;
    return product;

  }

  public dataURItoBlob(picBytes:any, imageType:any) {
    const byteString = window.atob(picBytes);
    const arrayBuffer = new ArrayBuffer(byteString.length);
    const int8Array = new Uint8Array(arrayBuffer);

    for(let i = 0; i < byteString.length; i++) {
      int8Array[i] = byteString.charCodeAt(i);
    }

    const blob = new Blob([int8Array], { type: imageType});
    return blob;
  }
  getTapisByIdTapis(tapisId:number){
    return this.httpClient.get<Tapis>("http://localhost:9090/getTapisByIdTapis/"+tapisId)
  }
  getTapisByType(type: string): Observable<any> {
    return this.httpClient.get<any>(`http://localhost:9090/byType/${type}`);
  }
  getCountTapis(){
    return this.httpClient.get("http://localhost:9090/tapisCount")
  }
  getTapisTypeCounts(): Observable<any> {
    return this.httpClient.get<any>("http://localhost:9090/tapisTypeCounts");
  }
}  