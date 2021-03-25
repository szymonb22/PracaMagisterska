import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../core/models/user.model';
import { AuthService } from '../core/services/auth.service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {
  @Input() currentUser;
  currentUserName: string;
  
  constructor(private authService: AuthService,
              private router: Router
  ) { }

  ngOnInit(): void {
    this.authService.getUserById(this.currentUser.user_id).subscribe(
        res=>{
          this.currentUserName = res.username
        }
    );
  }

  logOut() {
    this.authService.logout();
    this.router.navigateByUrl('login');
  }
}
