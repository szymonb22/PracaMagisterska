import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../core/services/auth.service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {

  constructor(private authService:AuthService,
              private router:Router
              ) { }

  ngOnInit(): void {
  }
  logOut(){
    this.authService.logout();
    this.router.navigateByUrl('login');
  }
}
