import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from '../model/user.model';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;

  constructor(private apiService: ApiService, private fb: FormBuilder, private router: Router) {
    this.createForm();
  }

  createForm() {
    this.registerForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
      email: ['', Validators.required]
    });
  }

  ngOnInit() {
  }

  onSubmit() {
    this.apiService.get('users').subscribe((data: any[]) => {
      const users = data;
      const user = {
        id: users.length + 1,
        username: this.registerForm.controls.username.value,
        pass: this.registerForm.controls.password.value,
        email: this.registerForm.controls.email.value
      };
      this.apiService.post('users', user).subscribe(() => {
      });
    });

    this.router.navigate(['/login']);
  }

}
