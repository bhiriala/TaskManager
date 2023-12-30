import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent{

  constructor(private http: HttpClient) {}

  onSubmit() {
    const formData = {
      email: 'user@example.com',
      password: 'password123',
    };

    this.http.post('http://localhost:3000/api/login', formData)
      .subscribe((response) => {
        console.log(response);
        // Handle the response from the server
      });
  }

}
