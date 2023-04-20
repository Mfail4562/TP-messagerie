import {Component} from '@angular/core';
import {FormGroup} from "@angular/forms";

@Component({
  selector: 'app-new-message',
  templateUrl: './new-message.component.html',
  styleUrls: ['./new-message.component.css']
})
export class NewMessageComponent {
  angularForm!: FormGroup;
}
