import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { RoadsignService } from '../services/roadsign.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  isDetected: boolean = false;
  Form: FormGroup;
  detectImg: any;
  signName: string;
  confidence:number;
  modelOption = new FormControl(1);
  signUrl = this.service.PhotoUrl;
  responseData:any;
  tooltipModel1 = "model składa się z 4 powłok, funckja aktywacujna relu";
  tooltipModel2 = "model składa się z 4 powłok, funckja aktywacujna sigmoid";
  tooltipModel3 = "model składa się z 3 powłok, funckja aktywacujna tanh";
  tooltipModel4 = "model składa się z 3 powłok, funckja aktywacujna selu";
  constructor(private service: RoadsignService,
    private fBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    this.Form = this.fBuilder.group({
      photo: '',
      modelOption:this.modelOption
    })
  }
  uploadPhoto(event) {
    var file = event.target.files;//[0]
    console.log(file.length);
    const formData: FormData = new FormData();
    if (file.length > 1) {
      for (let i = 0; i < file.length; i++) {
        formData.append('recognizedFile' + i.toString(), file[i], file[i].name);

      }
    }
    else {
      formData.append('recognizedFile', file[0], file[0].name);
    }
    formData.append('modelNumber',this.Form.value.modelOption)

    // this.Form.get('PhotoFileName').setValue(file.name);
    this.service.signRecognize(formData).subscribe((data: any) => {
      console.log(data.length)
      if (data) {
        console.log('model'+this.Form.value.modelOption)
        this.isDetected = true;
        this.signName = data[0][0];
        this.detectImg = data[0][1];
        this.responseData = data
        this.confidence = data[0][2];
      }
      // this.detectImg = this.service.PhotoUrl + data;//[0]

      // this.signName = data[0];
      //this.photo = data.toString();
      // console.log(this.Form.controls.photo)
    })
    this.isDetected = false;
   
  }

  changeModel(){
    console.log(this.Form.value.modelOption)
  this.service.changeModel(this.Form.value.modelOption).subscribe(res =>{
    if (res!=null) {
      console.log(res)
    }
  });
  }


  // recognize() {
  //   console.log(this.Form.value);
  //   this.service.signRecognize(this.Form.value).subscribe(
  //     res => {
  //       if (res != null) {
  //         this.isDetected = true;
  //         console.log(res)
  //         // this.service.getRecognizedSign().subscribe(
  //         //   img => {
  //         //     if (img.DetectedSign !== '') {
  //         //       this.detectImg = img.DetectedSign;
  //         //     }
  //         //     console.log(img);

  //         //   }
  //         )
  //         //this.detectImg = res; 
  //       }
  //     }
  //   )
  // }
}
