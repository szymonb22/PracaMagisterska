import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CustomMaterialModule } from '../custom-material.module';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { routes } from './routes';
import { MainComponent } from './main/main.component';
import { SignsManagmentComponent } from './signs-managment/signs-managment.component';
import { AddSignComponent } from './signs-managment/add-sign/add-sign.component';
import { EditSignComponent } from './signs-managment/edit-sign/edit-sign.component';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
@NgModule({
  declarations: [LayoutComponent, MainComponent, SignsManagmentComponent, AddSignComponent, EditSignComponent],
  imports: [
    InfiniteScrollModule,
    CommonModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forChild(routes),
    CustomMaterialModule,
    FormsModule,
  ],
  exports: [
    LayoutComponent
  ]
})
export class LayoutModule { }
