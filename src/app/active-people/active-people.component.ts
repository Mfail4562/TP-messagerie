import {Component, OnDestroy, OnInit} from '@angular/core';
import {People} from "../class/People";
import {PeopleService} from "../services/people/people-service.service";

@Component({
  selector: 'app-active-people',
  templateUrl: './active-people.component.html',
  styleUrls: ['./active-people.component.css']
})
export class ActivePeopleComponent implements OnInit, OnDestroy {
  activePeople!: Array<People>;

  constructor(private peopleService: PeopleService) {
  }

  ngOnInit() {
    this.peopleService.peoplesEmitter.subscribe((value) => this.activePeople = value);
  }

  ngOnDestroy() {
    this.peopleService.peoplesEmitter.unsubscribe();
  }
}
