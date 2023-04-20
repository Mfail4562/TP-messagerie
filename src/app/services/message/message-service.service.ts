import {EventEmitter, Injectable} from '@angular/core';
import {Message} from "../../class/Message";

@Injectable({
  providedIn: 'root'
})
export class MessageService {
  public messageEmitter: EventEmitter<Message[]> = new EventEmitter<Message[]>();
  private messages: Message[] = [];

  constructor() {
  }

  public addMessage(message: Message): boolean {
    if (message && message.people.pseudo !== '' && message.message !== '') {
      this.messages.push(message);
      this.notification();
      return true;
    } else {
      return false;
    }
  }

  private notification() {
    this.messageEmitter.emit(this.messages.slice());
  }
}
