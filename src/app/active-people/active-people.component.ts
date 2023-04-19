import {Component} from '@angular/core';
import {People} from "../class/People";

@Component({
  selector: 'app-active-people',
  templateUrl: './active-people.component.html',
  styleUrls: ['./active-people.component.css']
})
export class ActivePeopleComponent {
  activePeople: Array<People> = [
    new People('Paul'), new People('Jean')
  ];
}
