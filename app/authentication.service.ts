import {Injectable} from '@angular/core';
import {Router} from '@angular/router';

export class User {
  constructor(public email: string, public password: string) {}
}

var users = [
  new User('admin@admin.com', '123456')
];

@Injectable()
export class AuthenticationService {

  constructor(private _router: Router) {}

  logout(): void {
    localStorage.removeItem("user");
    this._router.navigate(['login']);
  }

  login(user: User): boolean {
    var authenticatedUser = users.find(u => u.email === user.email);
    if (authenticatedUser && authenticatedUser.password === user.password) {
      localStorage.setItem("user", JSON.stringify(authenticatedUser));
      this._router.navigate(['admin']);
      return true;
    }
    return false;
  }

  checkCredentials(): void {
    if (localStorage.getItem("user") === null) {
      this._router.navigate(['login']);
    }
  }
}
