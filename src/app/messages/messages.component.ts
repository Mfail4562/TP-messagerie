import {Component} from '@angular/core';
import {Message} from "../class/Message";
import {People} from "../class/People";

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent {
  listeMessages: Array<Message> = [
    new Message(new People('Paul'), 'Coucou c\'est paul j\'espere que vous allez bien'),
    new Message(new People('Paul'), 'Oups j\'ai oublié de vous dire que j\'etais nouveau ici!'),
    new Message(new People('Jean'), 'Je revien du sport c\'etait vraiment une bonne séance'),
    new Message(new People('Jean'), 'allez demain je me met au sport!')
  ];
}
