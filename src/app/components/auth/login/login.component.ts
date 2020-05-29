import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import { AuthService } from '../../../core/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  hide = true;
  public errorLogin = false;
  email = new FormControl('', [Validators.required, Validators.email]);
  password = new FormControl('', [Validators.required, Validators.nullValidator]);
  loginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.nullValidator]),
  });
  constructor(private logoutSvc: AuthService, private router: Router) { }

  ngOnInit(): void {
  }

  getErrorEmail() {
    if (this.email.hasError('required')) {
      return 'You must enter a email';
    }
    return this.email.hasError('email') ? 'Not a valid email' : '';
  }

  getErrorPassword() {
    if (this.password.hasError('required')) {
      return 'You must enter a password';
    }
    return this.password.hasError('password') ? 'Not a valid password' : '';
  }

  async onLogin() {
    const { email, password } = this.loginForm.value;
    try {
      const user = await this.logoutSvc.login(email, password);
      if (user) {
        //redirect to home page
        this.router.navigate(['/music']);
      } else {
        this.errorLogin = true;
      }
    } catch (error) {
      console.log(error);
    }
  }

}
