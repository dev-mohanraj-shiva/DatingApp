import { compileNgModule } from '@angular/compiler';
import { Component, input, model } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-registration',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './registration.component.html',
  styleUrl: './registration.component.css'
})
export class RegistrationComponent {
  availableUsers  = input.required<any>();
  model:any={}

register()
{
  console.log('register called');
  console.log(this.model);
}
cancel(){console.log('Cancel Called');}
}
