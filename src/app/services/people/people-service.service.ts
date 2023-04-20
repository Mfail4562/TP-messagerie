import {EventEmitter, Injectable} from '@angular/core';
import {People} from "../../class/People";

@Injectable({
  providedIn: 'root'
})
export class PeopleService {
  public peoplesEmitter: EventEmitter<People[]> = new EventEmitter<People[]>();
  private peoples: People[] = [];

  constructor() {
  }

  public addPeople(people: People): boolean {
    if (people && people.pseudo !== '') {
      if (this.dontHave(people)) {
        this.peoples.push(people);
        this.notification();
        return true;
      } else {
        return false;
      }
    } else {
      return false;
    }
  }

  private notification() {
    this.peoplesEmitter.emit(this.peoples.slice());
  }

  private dontHave(people: People) {
    let havent: boolean = true;
    this.peoples.forEach(function (p) {
      if (p.pseudo === people.pseudo) {
        havent = false;
      }
    });
    return havent;
  }
}
