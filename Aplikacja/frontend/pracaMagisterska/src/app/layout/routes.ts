import {Routes} from '@angular/router';
import { MainComponent } from './main/main.component';
import { SignsManagmentComponent } from './signs-managment/signs-managment.component';

export const routes:Routes = [
    {path:'main',component:MainComponent},
    {path:'sign',component:SignsManagmentComponent}
]