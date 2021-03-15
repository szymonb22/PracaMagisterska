import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { RoadsignService } from '../../services/roadsign.service';

@Component({
  selector: 'app-edit-sign',
  templateUrl: './edit-sign.component.html',
  styleUrls: ['./edit-sign.component.scss']
})
export class EditSignComponent implements OnInit {

  FileName: string;
  Form: FormGroup;
  signCategories = ['------', 'ostrzegawcze', 'zakazu', 'nakazu', 'informacyjne'];
  PhotoFilePath: string;

  constructor(private formBuilder: FormBuilder,
    private dialogRef: MatDialogRef<RoadsignService>,
    private service: RoadsignService) { }

  ngOnInit(): void {
    this.Form = this.formBuilder.group({
      RoadSignName: [, [Validators.required]],
      RoadSignCategory: ['', [Validators.required]],
      PhotoFileName: ['']
    });
  }
  get f() { return this.Form.controls; }
  editSign() {
    this.service.editSignFromDataSet(this.Form.value).subscribe(
      res => {
        console.log('edited');
      }

    )
    this.service.getAllSignsFromDataSet();
    this.dialogRef.close();

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
