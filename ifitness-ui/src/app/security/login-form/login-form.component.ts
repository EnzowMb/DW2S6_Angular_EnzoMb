import { Component } from '@angular/core';

import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent {

  jwtPayload: any;

  constructor(private auth: AuthService) {
    this.jwtPayload = this.auth.jwtPayload;
  }

  login(user: string, password: string): void {
    this.auth.login(user, password);
  }

}
