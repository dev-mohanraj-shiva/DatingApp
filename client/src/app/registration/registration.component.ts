import { compileNgModule } from '@angular/compiler';
import { Component, EventEmitter, inject, Input, input, model, output, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AccountService } from '../services/account-service.service';

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

  private accountService = inject(AccountService);
  model:any={}

register()
{
    this.accountService.Register(this.model).subscribe(
      {
          next: response => {
              console.log(response);
          },
          error: error => {
              console.log(error);
          }
      }
    )
}
cancel(){
  this.cancelRegister.emit(false);}
}
