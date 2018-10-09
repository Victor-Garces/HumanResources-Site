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

  constructor(private loginService: LoginService, private router: Router) {
  }

  ngOnInit() {
  }

  onSubmit(username: string, password: string){
    const user: User = {
      email: username,
      password: password
    };

    this.loginService.validateLogin(user).then((data) => {
      if(data === true){
        this.router.navigate(['/employee'])
      }else{
        console.log('Invalid user');
      }
    }, (error) => console.log(error)
  )
  }
}
