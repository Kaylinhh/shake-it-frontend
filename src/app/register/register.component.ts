import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { User } from '../shared/models/user.model';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  registerForm!: FormGroup;
  user!: User;

  constructor(private formBuilder: FormBuilder){}

  ngOnInit(): void {
    this.initForm();
  }

  private initForm(): void {
    this.registerForm = this.formBuilder.group({
      email: ["", [Validators.compose([Validators.required, Validators.email])]],
      username: ["", [Validators.required]],
      password: ["", [Validators.required]],
      passwordVerification: ["", [Validators.required]]
    })
  }

  register(user: User){

  }
}
