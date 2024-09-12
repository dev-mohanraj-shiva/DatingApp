import { Component, inject, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AccountService } from '../services/account-service.service';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { ToastrComponentlessModule, ToastrService } from 'ngx-toastr';
import { TitleCasePipe } from '@angular/common';

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [FormsModule,
    BsDropdownModule,
    RouterLink,
    RouterLinkActive,
    TitleCasePipe
  ],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.css'
})
export class NavComponent  {
  accountService = inject(AccountService)
  router = inject(Router)
  private toastr = inject(ToastrService);
  isLoggedIn:boolean = false;
  model:any = {};


   login()
  {
      this.accountService.Login(this.model).subscribe({
        next:response => {
          // this.isLoggedIn=true;
          // console.log(response);
          this.router.navigateByUrl("/members");
        },
        error:error =>{
          this.isLoggedIn=false;
          // console.log(error);
          this.toastr.error(error.title);

        }
  });
  }
  logout()
  {
    this.accountService.logout();
    this.router.navigateByUrl("/");
  }
}
