import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
//   animations: [
//     trigger('fadeInOut', [
//       state('void', style({
//         opacity: 0
//       })),
//       transition('void <=> *', animate(1000)),
//     ]),
//   ]
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  showLogin: boolean = true;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  toggleLogin() {
    this.showLogin = !this.showLogin;
  }

  get form() { return this.loginForm.controls; }

  onSubmit() {
    if (this.loginForm.invalid) {
      return;
    }
    console.log('Form submitted:', this.loginForm.value);
  }
}
