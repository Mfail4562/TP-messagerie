import {Component, OnDestroy, OnInit} from '@angular/core';
import {Message} from "../class/Message";
import {MessageService} from "../services/message/message-service.service";

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit, OnDestroy {
  listeMessages!: Array<Message>;

  constructor(private messageService: MessageService) {
  }

  ngOnInit() {
    return this.messageService.messageEmitter.subscribe((value) => this.listeMessages = value);
  }

  ngOnDestroy() {
    return this.messageService.messageEmitter.unsubscribe();
  }
}
