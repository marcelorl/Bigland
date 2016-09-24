import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent }  from './app.component';
import { routing } from './app.routing';
import { AuthenticationService } from './authentication.service';
import { AdminComponent } from './admin.component';
import { LoginComponent } from './login.component';
import { PolymerElement } from '@vaadin/angular2-polymer';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    routing,
    HttpModule
  ],
  declarations: [
    AppComponent,
    AdminComponent,
    LoginComponent,
    PolymerElement('paper-button'),
    PolymerElement('paper-card'),
    PolymerElement('paper-checkbox'),
    PolymerElement('paper-input')
  ],
  providers: [ AuthenticationService ],
  bootstrap: [ AppComponent ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})

export class AppModule { }
