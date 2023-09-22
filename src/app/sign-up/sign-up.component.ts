import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { AppService } from '../app.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent {
  registerForm: FormGroup;
  constructor(
    private fb: FormBuilder,
    private service: AuthService,
    private router: Router,
    private appService: AppService
    ) {
      this.registerForm = this.fb.group({
        id: ['', [Validators.required, Validators.minLength(5)]],
        name: ['', Validators.required],
        email: ['', [Validators.required, Validators.email]],
        password: ['', [Validators.required, Validators.pattern(/^(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*]).{8,}$/)]],
        gender: ['', Validators.required],
        role: [''],
        isActive: [false]
      })
  }

  registerUser() {
    if(this.registerForm.valid) {
      this.service.createUser(this.registerForm.value).subscribe(res => {
        this.appService.success('User Created Successfully');
        this.router.navigate(['login'])
      })
    } else {
      this.appService.error('Please Enter Valid Data');
    }
  }
  
}
