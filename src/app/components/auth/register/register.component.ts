import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from '../../../core/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
  providers: [AuthService]
})
export class RegisterComponent implements OnInit {
  hide = true;
  public errorlogin = false;
  email = new FormControl('', [Validators.required, Validators.email]);
  password = new FormControl('', [Validators.required, Validators.nullValidator]);

  registerForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl('')
  });

  constructor(private authSvs: AuthService, private router: Router) { }

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

  async onRegister() {
    const { email, password } = this.registerForm.value;

    try {
      const user = await this.authSvs.register(email, password);
      console.log(user);
      if (user) {
        this.router.navigate(['/music'])
      }
    } catch (error) {
      console.log(error);
    }

  }

}
