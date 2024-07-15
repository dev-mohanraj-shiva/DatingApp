import { NgFor } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,NgFor],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {

  title = 'Sample Application';
  http = inject(HttpClient);
  users:any;

  ngOnInit(): void {
    this.http.get('https://localhost:7132/api/user').subscribe({
      next:response => this.users = response,
      error:error => console.log(error),
      complete: () => console.log('Completed')
    }
    );
  }
}
