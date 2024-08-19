import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AccountService } from '../services/account-service.service';

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [FormsModule],
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
          console.log(response);
        },
        error:error =>{
          console.log(error);
        }
  });
  }
}
