import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AccountService } from '../services/account-service.service';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [FormsModule,NgIf],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.css'
})
export class NavComponent {
  accountService = inject(AccountService)
  isLoggedIn:boolean = false;
  model:any = {};

   login()
  {
      this.accountService.Login(this.model).subscribe({
        next:response => {
          this.isLoggedIn=true;
          console.log(response);
        },
        error:error =>{
          this.isLoggedIn=false;
          console.log(error);
        }
  });
  }
}
