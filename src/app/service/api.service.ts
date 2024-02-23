import { Injectable } from '@angular/core';
import axios from 'axios';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor() {}

  async getLogin(email: string, password: string) {
    return await axios.post('http://localhost:9090/api/login', {
      email,
      password,
    });
  }

  async getLogout() {
    return await axios.post('http://localhost:9090/api/logout');
  }
}
