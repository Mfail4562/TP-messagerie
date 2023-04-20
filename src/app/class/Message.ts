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
}
