import { Component } from '@angular/core';
import { SignupService } from 'src/app/services/signup.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent {
  email = '';
  password = '';
  name = '';
  surname = '';
  user: any = {};

  constructor(private signupService: SignupService) {}

  signUp(): void {
    this.signupService.signUp(this.user).subscribe(
      (response) => {
        console.log('User signed up successfully', response);
      },
      (error) => {
        console.error('Error signing up', error);
      }
    );
  }
}
