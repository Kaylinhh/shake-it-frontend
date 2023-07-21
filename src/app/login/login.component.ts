import { User } from './../shared/models/user.model';
import { Component } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  loginForm!: FormGroup;
  user!: User;

  constructor(private formBuilder: FormBuilder){}

  login(user: User){}

}
