import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from '../../service/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  login: FormGroup;

  constructor(
    private fb: FormBuilder,
    private api: ApiService,
    private router: Router,
  ) {
    this.login = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  async onSubmit() {
    const res = await this.api.getLogin(
      this.login.value['email'],
      this.login.value['password'],
    );
    if (res.status != 200) return alert('Email o contraseña incorrecto');
    this.router.navigate(['/profile']);
    console.log('Login correcto', res.status);
  }
}
