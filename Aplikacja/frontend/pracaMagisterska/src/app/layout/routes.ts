import { Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { SignsManagmentComponent } from './signs-managment/signs-managment.component';
import { AuthGuard } from '../core/guards/auth.guard';
export const routes: Routes = [
    { path: 'main', component: MainComponent },
    { path: 'sign', component: SignsManagmentComponent ,canActivate: [AuthGuard]}
]