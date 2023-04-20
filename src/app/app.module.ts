import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";

import {AppComponent} from './app.component';
import {HeaderComponent} from './header/header.component';
import {ActivePeopleComponent} from './active-people/active-people.component';
import {MessagesComponent} from './messages/messages.component';
import {NewMessageComponent} from './new-message/new-message.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ActivePeopleComponent,
    MessagesComponent,
    NewMessageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
