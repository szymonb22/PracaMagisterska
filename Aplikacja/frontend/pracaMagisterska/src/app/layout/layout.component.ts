import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserSandbox } from '../core/sandboxes/User.sandbox';
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
    private sandbox: UserSandbox,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.sandbox.getUser(this.currentUser.user_id).subscribe(
      res => {
        if (res.userDetail !== null) {
          this.currentUserName = res.userDetail.username;
        }
      }
    );
  }

  logOut() {
    this.authService.logout();
    this.router.navigateByUrl('login');
  }
}
