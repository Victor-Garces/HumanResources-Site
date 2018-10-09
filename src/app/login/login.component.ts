import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../services/login.service';
import { User } from '../../models/user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  invalidUser: boolean;

  constructor(private loginService: LoginService, private router: Router) {
    this.invalidUser = true;
  }

  ngOnInit() {
    this.setDefaultLoginStatus();
  }

  onSubmit(username: string, password: string) {
    const user: User = {
      email: username,
      password: password
    };

    this.loginService.validateLogin(user).then((data) => {
      if (data === true) {
        this.invalidUser = true;
        this.loginService.changeLoginStatus(true);
        this.router.navigate(['/employee']);
      } else {
        this.invalidUser = false;
      }
    }, (error) => console.log(error)
    )
  }

  setDefaultLoginStatus() {
    this.loginService.changeLoginStatus(false);
  }
}
