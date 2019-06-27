import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  formData = {
    email: '',
    password: '',
    subscription: ''
  }
  submitted = false;

  constructor() { }

  ngOnInit() {
  }

  submit(f) {
    this.formData.email = f.email;
    this.formData.password = f.password;
    this.formData.subscription = f.subscription;
    this.submitted = true;
  }
}
