import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { RoadsignService } from '../../services/roadsign.service';
import { MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition } from '@angular/material/snack-bar';

@Component({
  selector: 'app-add-sign',
  templateUrl: './add-sign.component.html',
  styleUrls: ['./add-sign.component.scss']
})

export class AddSignComponent implements OnInit {

  FileName: string;
  Form: FormGroup;
  signCategories = ['', 'ostrzegawcze', 'zakazu', 'nakazu', 'informacyjne'];
  PhotoFilePath: string;
  horizontalPosition: MatSnackBarHorizontalPosition = 'center';
  verticalPosition: MatSnackBarVerticalPosition = 'bottom';


  constructor(private formBuilder: FormBuilder,
    private dialogRef: MatDialogRef<RoadsignService>,
    private service: RoadsignService,
    private _snackBar: MatSnackBar
  ) { }

  ngOnInit(): void {

    this.Form = this.formBuilder.group({
      RoadSignName: ['', [Validators.required]],
      RoadSignCategory: ['', [Validators.required]],
      PhotoFileName: ['']
    });
  }

  get f() { return this.Form.controls; }

  getErrorMessage() {
    if (this.f.RoadSignName.hasError('required')) {
      return 'To pole jest wymagane';
    }

    if (this.f.RoadSignCategory.hasError('required')) {
      return 'To pole jest wymagane';
    }
  }

  AddSign() {
    this.service.addSignToDataSet(this.Form.value).subscribe(
      res => {
        this._snackBar.open('pomyślnie dodano znak ' + this.Form.value.RoadSignName, '', {
          duration: 2500,
          horizontalPosition: this.horizontalPosition,
          verticalPosition: this.verticalPosition,
        });
        this.service.getAllSignsFromDataSet();
        this.dialogRef.close();
      },
      err=>{
        console.log(err);
      }
    )
  }

  handleDialogClose() {
    this.dialogRef.close();
  }

  uploadPhoto(event) {
    var file = event.target.files[0];
    const formData: FormData = new FormData();
    formData.append('uploadedFile', file, file.name);
    this.Form.get('PhotoFileName').setValue(file.name);
    this.service.UploadPhoto(formData).subscribe((data: any) => {

      this.FileName = data.toString();
      this.PhotoFilePath = this.service.PhotoUrl;
    })
  }
}
