import { Component, inject, OnInit } from '@angular/core';
import { RegistrationComponent } from '../registration/registration.component';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RegistrationComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {

  http = inject(HttpClient);
  registerMode:boolean = false;
  users:any;

  ngOnInit(): void {
      this.getUsers();
  }
  toggleregister()
  {
    this.registerMode = !this.registerMode;
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
}
