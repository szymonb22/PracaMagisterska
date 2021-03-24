import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { RoadSign } from '../models/roadsign.model';
import { RoadsignService } from '../services/roadsign.service';
import { AddSignComponent } from './add-sign/add-sign.component';
import { EditSignComponent } from './edit-sign/edit-sign.component';

@Component({
  selector: 'app-signs-managment',
  templateUrl: './signs-managment.component.html',
  styleUrls: ['./signs-managment.component.scss']
})

export class SignsManagmentComponent implements OnInit {

  signsFromDataSet: RoadSign[];
  PhotoFilePath="http://127.0.0.1:8000/dataset/";
  signNameFilter:string="";
  signListWithoutFilter:any=[];
  RoadSignCategory:string;
  signCategories = ['------', 'ostrzegawcze', 'zakazu', 'nakazu', 'informacyjne'];
  constructor(private signService: RoadsignService,
              private dialog: MatDialog) { }

  ngOnInit(): void {
  
    this.getAll();
  }

  addClick() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = false;
    dialogConfig.width = '40%';
    dialogConfig.height = '78%';
    dialogConfig.autoFocus = false;
    const dialogRef = this.dialog.open(AddSignComponent, dialogConfig);
  }


  deleteClick(sign){
    this.signService.deleteSignFromDataSet(sign.RoadSignId).subscribe(res=>{
      this.getAll();
    })
  }
  editClick(sign){
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = false;
    dialogConfig.width = '40%';
    dialogConfig.height = '78%';
    dialogConfig.autoFocus = false;
    dialogConfig.data = {
      sign: sign
    };
  
    const dialogRef = this.dialog.open(EditSignComponent, dialogConfig);
  }
  getAll() {
    this.signService.getAllSignsFromDataSet().subscribe(res => {
      this.signsFromDataSet = res;
      this.signListWithoutFilter = res;
    });
  }

  FilterFn(){
    var signNameFilter = this.signNameFilter;

    this.signsFromDataSet = this.signListWithoutFilter.filter(function(el){
      return el.RoadSignName.toString().toLowerCase().includes(
        signNameFilter.toString().trim().toLowerCase()
      )
    });    
  }

  getByCategory(category:string){
    this.signService.getSignsByCategory(category).subscribe(
      res=>{
        this.signsFromDataSet = res;
        this.signListWithoutFilter = res;
      }
    )
  }
}
