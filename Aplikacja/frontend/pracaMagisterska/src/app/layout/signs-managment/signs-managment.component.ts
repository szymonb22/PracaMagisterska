import { Component, Input, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { RoadSign } from '../models/roadsign.model';
import { AddSignComponent } from './add-sign/add-sign.component';
import { EditSignComponent } from './edit-sign/edit-sign.component';
import { RoadSignSandbox } from '../../core/sandboxes/RoadSign.sandbox';
import { RoadsignService } from '../services/roadsign.service';
@Component({
  selector: 'app-signs-managment',
  templateUrl: './signs-managment.component.html',
  styleUrls: ['./signs-managment.component.scss']
})

export class SignsManagmentComponent implements OnInit {

  count: number;
  currentPage = 1;
  searchRequest: string;
  signsFromDataSet: RoadSign[];
  PhotoFilePath = "http://127.0.0.1:8000/dataset/";
  signNameFilter: string = "";
  tooltipContent = "wróć";
  signListWithoutFilter: any = [];
  RoadSignCategory: string;
  signCategories = ['', 'ostrzegawcze', 'zakazu', 'nakazu', 'informacyjne'];

  constructor(private dialog: MatDialog,
    private route: Router,
    private signSandbox: RoadSignSandbox,
    private service:RoadsignService
  ) { }

  ngOnInit() {

    this.signSandbox.getSigns().subscribe(
      res => {
        this.signsFromDataSet = res.signs,
          // this.count = res.count;
        console.log(res.signs)
        // console.log(res.count)
      }
    );
    this.signSandbox.getPagedSigns(1);
  }

  onScroll() {
    console.log('in')
    if (this.count != this.signsFromDataSet.length) {
      this.currentPage++;
      this.signSandbox.loadEventsbyInserting(this.currentPage);
    }
  }


  addClick() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = false;
    dialogConfig.width = '40%';
    dialogConfig.height = '78%';
    dialogConfig.autoFocus = false;
    const dialogRef = this.dialog.open(AddSignComponent, dialogConfig);
  }

  deleteClick(sign) {
    this.signSandbox.removeSign(sign.RoadSignId);
  }

  editClick(sign) {
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
    this.signSandbox.getAllSigns().subscribe(
      res => {
        this.signsFromDataSet = res;
        this.signListWithoutFilter = res;
      },
      err => {
        console.log(err);
      }
    )
  }

  FilterFn() {
    var signNameFilter = this.signNameFilter;

    this.signsFromDataSet = this.signListWithoutFilter.filter(function (el) {
      return el.RoadSignName.toString().toLowerCase().includes(
        signNameFilter.toString().trim().toLowerCase()
      )
    });
  }

  getByCategory(category: string) {
    this.signSandbox.getSignsByCategory(category).subscribe(
      res => {
        this.signsFromDataSet = res;
        this.signListWithoutFilter = res;
      },
      err => {
        console.log(err);
      }
    )
  }

  goBack() {
    this.route.navigateByUrl('main');
  }

  search() {
    this.searchRequest = this.signNameFilter
    this.signSandbox.searchSign(this.searchRequest).subscribe(
      res => this.signsFromDataSet = res,

    )
  }
  sorting( asc) { //prop,
    const helper =[...this.signsFromDataSet]
    if(asc){
    helper.sort(function(a, b) {
      var nameA = a.RoadSignName.toUpperCase(); // ignore upper and lowercase
      var nameB = b.RoadSignName.toUpperCase(); // ignore upper and lowercase
      if (nameA < nameB) {
        console.log(nameA)
        return -1;
      }
      if (nameA > nameB) {
        return 1;
      }
    
      // names must be equal
      return 0;
    })
    }
    else{
      helper.sort(function(a, b) {
        var nameA = a.RoadSignName.toUpperCase(); // ignore upper and lowercase
        var nameB = b.RoadSignName.toUpperCase(); // ignore upper and lowercase
        if (nameA > nameB) {
          return -1;
        }
        if (nameA < nameB) {
          return 1;
        }
      
        // names must be equal
        return 0;
      })
    }
    return this.signsFromDataSet = helper 
  }
}
