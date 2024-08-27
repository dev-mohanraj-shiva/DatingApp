import { compileNgModule } from '@angular/compiler';
import { Component, EventEmitter, Input, input, model, output, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-registration',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './registration.component.html',
  styleUrl: './registration.component.css'
})
export class RegistrationComponent {
  //// old method
  // @Input() availableUsers:any;
  //// new method
  availableUsers  = input.required<any>();
  //// old method
  // @Output() cancelRegister = new EventEmitter();
  //// new method
  cancelRegister = output<boolean>();

  model:any={}

register()
{
  console.log('register called');
  console.log(this.model);
}
cancel(){
  this.cancelRegister.emit(false);}
}
