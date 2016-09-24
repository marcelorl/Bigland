import {Component} from '@angular/core';
import {AuthenticationService} from './authentication.service'

@Component({
  selector: 'login-form',
  providers: [AuthenticationService],
  template: `
            <div class="container" >
                <div class="content">
                    <span>Parabéns, você está logado.</span>
                    <br />
                    <a (click)="logout()" href="#">Logout</a>
                </div>
            </div>
    	`
})

export class AdminComponent {
  constructor(private _service:AuthenticationService){}

  ngOnInit(): void{
    this._service.checkCredentials();
  }

  logout(): void {
    this._service.logout();
  }
}
