import {Component} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {PeopleService} from "../services/people/people-service.service";
import {MessageService} from "../services/message/message-service.service";
import {People} from "../class/People";
import {Message} from "../class/Message";

@Component({
  selector: 'app-new-message',
  templateUrl: './new-message.component.html',
  styleUrls: ['./new-message.component.css']
})
export class NewMessageComponent {
  angularForm!: FormGroup;

  constructor(private formBuilder: FormBuilder,
              private peopleService: PeopleService,
              private messageService: MessageService) {
    this.createForm();
  }

  onRegister() {
    if (!this.validationProblem()) {
      let newPeople: People = new People(this.angularForm.controls['pseudo'].value);
      let newMessage: string = this.angularForm.controls['message'].value;
      this.peopleService.addPeople(newPeople);
      this.messageService.addMessage(new Message(newPeople, newMessage));
      this.angularForm.reset();
    }
  }

  invalidPseudo() {
    return this.invalidField('pseudo');
  }

  invalidMessage() {
    return this.invalidField('message');
  }

  validationProblem() {
    return this.angularForm.pristine || this.angularForm.invalid;
  }

  private createForm() {
    this.angularForm = this.formBuilder.group(
      {
        pseudo: ['', [Validators.required, Validators.maxLength(15)]],
        message: ['', [Validators.required, Validators.minLength(10)]]
      }
    );
  }

  private invalidField(field: string) {
    return this.angularForm.controls[field].invalid &&
      (this.angularForm.controls[field].dirty ||
        this.angularForm.controls[field].touched);
  }

}
