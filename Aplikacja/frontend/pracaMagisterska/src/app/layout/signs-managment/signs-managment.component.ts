import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { RoadSign } from '../models/roadsign.model';
import { RoadsignService } from '../services/roadsign.service';
import { AddSignComponent } from './add-sign/add-sign.component';

@Component({
  selector: 'app-signs-managment',
  templateUrl: './signs-managment.component.html',
  styleUrls: ['./signs-managment.component.scss']
})
export class SignsManagmentComponent implements OnInit {
  ModalTitle = "Dodaj znak";
  signsFromDataSet: RoadSign[];
  PhotoFilePath="http://127.0.0.1:8000/dataset/";

  constructor(private signService: RoadsignService,
              private dialog: MatDialog) { }

  ngOnInit(): void {
    this.getAll();
  }

  addClick() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = false;
    dialogConfig.width = '40%';
    dialogConfig.height = '70%';
    dialogConfig.autoFocus = false;
    const dialogRef = this.dialog.open(AddSignComponent, dialogConfig);
  }
  closeClick() {

  }
  
  getAll() {
    this.signService.getAllSignsFromDataSet().subscribe(res => {
      this.signsFromDataSet = res;
      
      // PhotoFileName
      // this.PhotoFilePath = this.signService.PhotoUrl + 'znak_stop.png';

    });
  }
}
