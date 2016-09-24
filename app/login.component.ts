import {Component} from '@angular/core';
import {AuthenticationService, User} from './authentication.service'

@Component({
  selector: 'login-form',
  providers: [AuthenticationService],
  template: `
    <div class="container">
      <paper-card heading="Faça seu login">
        <div class="panel-body">
          <div class="row">
            <div class="input-field col s12">
              <paper-input type="text" [(ngModel)]="user.email" label="email"></paper-input>
            </div>
          </div>

          <div class="row">
            <div class="input-field col s12">
              <paper-input type="password" [(ngModel)]="user.password" label="senha"></paper-input>
            </div>
          </div>

          <span>{{errorMsg}}</span>
          <paper-button raised (click)="login()" 
              class="btn waves-effect waves-light" 
              type="submit" name="action">Login</paper-button>
        </div>
      </paper-card>
    </div>
    	`,
  styles: [`
    paper-card {
      width: 50%;
    }
    
    paper-input {
      width: 90%;
      margin: auto;
    }
    
    paper-button {
      width: 20%;
      margin: 20px auto;
    }
  `]
})

export class LoginComponent {

  public user = new User('', '');
  public errorMsg = '';

  constructor(private _service: AuthenticationService) {
  }

  login() {
    if (!this._service.login(this.user)) {
      this.errorMsg = 'Failed to login';
    }
  }
}
