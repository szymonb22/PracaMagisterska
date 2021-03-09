import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CustomMaterialModule } from '../custom-material.module';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import {routes} from './routes';
import { MainComponent } from './main/main.component';
import { SignsManagmentComponent } from './signs-managment/signs-managment.component';
import { AddSignComponent } from './signs-managment/add-sign/add-sign.component';

@NgModule({
  declarations: [LayoutComponent, MainComponent, SignsManagmentComponent, AddSignComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forChild(routes),
    CustomMaterialModule, FormsModule,
    ReactiveFormsModule
  ],
  exports:[
    LayoutComponent
  ]
})
export class LayoutModule { }
