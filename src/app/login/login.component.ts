import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AppService } from '../app.service';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  loginForm: FormGroup;
  userData: any;

  constructor(
    private formBuilder: FormBuilder,
    private service: AuthService,
    private router: Router,
    private appService: AppService
    ) {
    sessionStorage.clear();
    this.loginForm = this.formBuilder.group({
      id: ['', Validators.required],
      password: ['', Validators.required]
    });
   }

  ngOnInit(): void {
  }

  loginUser(): void {
    if(this.loginForm.valid) {
      this.service.getUserbyCode(this.loginForm.value.id).subscribe(res => {
        this.userData = res;
        if(this.userData.password === this.loginForm.value.password) {
          if(this.userData.isActive) {
            sessionStorage.setItem('userName', this.userData.id);
            sessionStorage.setItem('userRole', this.userData.role);
            this.router.navigate(['home']);
          } else {
            this.appService.error(`Access isn't granted. Please contact the admin`);
          }
        } else {
          this.appService.error('Invalid Credentials');
        }
      })
    } else {
      this.appService.error('Please enter valid credentials')
    }
  }
  
}
