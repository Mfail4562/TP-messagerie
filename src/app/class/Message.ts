import {People} from "./People";

export class Message {
  people: People;
  message: string;
  date: Date;

  constructor(people: People, message: string) {
    this.date = new Date();
    this.message = message;
    this.people = people;
  }

  public static createMessage(people: People, message: string, date: Date): Message {
    const newMessage: Message = new Message(people, message);
    newMessage.date = date;
    return newMessage;
  }
}
