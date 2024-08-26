import { Component } from '@angular/core';
import { RegistrationComponent } from '../registration/registration.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RegistrationComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  registerMode:boolean = false;

  toggleregister()
  {
    this.registerMode = !this.registerMode;
  }

}
