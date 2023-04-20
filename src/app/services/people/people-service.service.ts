import {EventEmitter, Injectable} from '@angular/core';
import {People} from "../../class/People";

@Injectable({
  providedIn: 'root'
})
export class PeopleServiceService {
  public peoplesEmitter: EventEmitter<People[]> = new EventEmitter<People[]>();
  private peoples: People[] = [];

  constructor() {
  }

  public addPeople(people: People): boolean {
    if (people && people.pseudo !== '') {
      if (!this.peoples.includes(people)) {
        this.peoples.push(people);
        this.notifier();
        return true;
      } else {
        return false;
      }
    } else {
      return false;
    }
  }

  private notifier() {
    this.peoplesEmitter.emit(this.peoples.slice());
  }
}
