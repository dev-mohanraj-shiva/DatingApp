import { NgFor } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavComponent } from "./nav/nav.component";
import { AccountService } from './services/account-service.service';
import { HomeComponent } from "./home/home.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgFor, NavComponent, HomeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  accountService = inject(AccountService)
  title = 'Sample Application';
  http = inject(HttpClient);
  users:any;

  ngOnInit(): void {
    this.getUsers();
    this.setCurrentUser();
  }
  getUsers()
  {
    this.http.get('https://localhost:7132/api/user').subscribe({
      next:response => this.users = response,
      error:error => console.log(error),
      complete: () => console.log('Completed')
    }
    );
  }
  setCurrentUser()
  {
    const userString = localStorage.getItem('user');
    if(!userString) return;
    const user = JSON.parse(userString)
    this.accountService.currentUser.set(user);
  }
}
