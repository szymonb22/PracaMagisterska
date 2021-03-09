import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { RoadsignService } from '../../services/roadsign.service';

@Component({
  selector: 'app-add-sign',
  templateUrl: './add-sign.component.html',
  styleUrls: ['./add-sign.component.scss']
})
export class AddSignComponent implements OnInit {

  Form:FormGroup;
  
 

  constructor(private formBuilder: FormBuilder,
              private dialogRef:MatDialogRef<RoadsignService>) { }

  ngOnInit(): void {
  
    this.Form = this.formBuilder.group({
      RoadSignName: ['', [Validators.required]],
         });
  }

  get f() { return this.Form.controls; }
  
  getErrorMessage() {
    if (this.f.RoadSignName.hasError('required')) {
      return 'To pole jest wymagane';
    }
  }
  AddSign(){
    
  }
  handleDialogClose(){
    this.dialogRef.close();
  }
}
