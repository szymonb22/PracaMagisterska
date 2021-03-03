import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CustomMaterialModule } from '../custom-material.module';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import {routes} from './routes';
import { MainComponent } from './main/main.component';

@NgModule({
  declarations: [LayoutComponent, MainComponent],
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
