import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from '../model/user.model';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  users: User[];
  loginForm: FormGroup;
  database: string = 'users';

  constructor(private apiService: ApiService, private fb: FormBuilder, private router: Router) {
    this.createForm();
  }

  createForm() {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  ngOnInit() {
  }

  onClickSubmit(username, password) {
    if (this.loginForm.valid) {
      this.apiService.get(this.database).subscribe((data: any[]) => {
        let foundUser: boolean = false;
        console.log(data);
        this.users = data;
        for (let user of this.users) {
          if (user.username == username && user.pass == password) {
            foundUser = true;
            // go to home page
            this.router.navigate(['/home']);
          }
        }

        if(!foundUser) {
          alert('Hey your username or password is wrong');
        }
      });
    }
  }

}
