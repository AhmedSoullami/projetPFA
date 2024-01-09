// ShowImageTapisComponent
import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FileHandle } from 'src/app/model/file-handle.model';

@Component({
  selector: 'app-show-image-tapis',
  templateUrl: './show-image-tapis.component.html',
  styleUrls: ['./show-image-tapis.component.css']
})
export class ShowImageTapisComponent implements OnInit {
  constructor(@Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit(): void {
    this.receiveImages();
  }

  receiveImages() {
    console.log(this.data);
  }
}
