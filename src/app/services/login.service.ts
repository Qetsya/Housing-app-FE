import { Injectable } from '@angular/core';

interface User {
  email: string;
  password: string;
}

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  constructor() {}

  onLogin(form: User) {
    const user = {
      email: form.email,
      password: form.password,
    };
    localStorage.setItem('user', JSON.stringify(user));
    console.log(form.email, form.password);
  }
}
