import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ContactData } from '../../interfaces/contact-data';

@Component({
  selector: 'app-contact',
  imports: [FormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css',
})
export class ContactComponent {
  contactData: ContactData = {
    name: '',
    email: '',
    message: '',
  };

  handleSendMessage() {
    console.log(this.contactData);
  }
}
