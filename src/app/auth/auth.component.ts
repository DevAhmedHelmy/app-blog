import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css'],
})
export class AuthComponent implements OnInit {
  isLoggin: boolean = true;
  constructor() {}

  ngOnInit(): void {}
  onSwitch() {
    this.isLoggin = !this.isLoggin;
  }
  onSubmit(form: NgForm) {
    console.log(form.value);
    form.reset();
  }
}
