import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent }  from './app.component';
import { routing } from './app.routing';
import { AuthenticationService } from './authentication.service';
import { AdminComponent } from './admin.component';
import { LoginComponent } from './login.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    routing,
    HttpModule
  ],
  declarations: [ AppComponent, AdminComponent, LoginComponent ],
  providers: [ AuthenticationService ],
  bootstrap: [ AppComponent ]
})

export class AppModule { }
