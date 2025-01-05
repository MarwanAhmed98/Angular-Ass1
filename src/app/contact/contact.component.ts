import { Component } from '@angular/core';
import {FormsModule} from'@angular/forms'

@Component({
  selector: 'app-contact',
  imports: [FormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
  Data:string='';
  Data2:string='';
  Data3:string='';
  Data4:string='';
}
