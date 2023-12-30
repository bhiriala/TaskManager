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

  successMessage: string | null = null;
  errorMessage: string | null = null;

  signUp(): void {
    this.user = {
      name: this.name,
      surname: this.surname,
      email: this.email,
      password: this.password,
    };

    this.signupService.signUp(this.user).subscribe(
      (response) => {
        console.log('User signed up successfully', response);
      },
      (error) => {
        console.error('Error signing up', error);
      }
    );

    this.signupService.signUp(this.user).subscribe(
      (response) => {
        console.log('User signed up successfully', response);
        this.successMessage = 'Sign up successful!';
        this.errorMessage = null;
      },
      (error) => {
        console.error('Error signing up', error);
        this.errorMessage = 'Error signing up. Please try again.';
        this.successMessage = null;
      }
      );
    }
  }