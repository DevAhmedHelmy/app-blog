import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css'],
})
export class AuthComponent implements OnInit {
  isLoggin: boolean = true;
  constructor(private _authService: AuthService) {}

  ngOnInit(): void {}
  onSwitch() {
    this.isLoggin = !this.isLoggin;
  }
  onSubmit(form: NgForm) {
    if (!form.valid) {
      return;
    }
    this._authService.signup(form.value.email, form.value.password);
    form.reset();
  }
}
