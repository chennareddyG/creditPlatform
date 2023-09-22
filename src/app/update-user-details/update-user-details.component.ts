import { Component, Inject, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { AppService } from '../app.service';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-update-user-details',
  templateUrl: './update-user-details.component.html',
  styleUrls: ['./update-user-details.component.scss']
})
export class UpdateUserDetailsComponent implements OnInit {
  roleList: any;
  editdata: any;
  registerForm: FormGroup;
  constructor(
    private fb: FormBuilder,
    private service: AuthService,
    private appService: AppService,
    private dialogref: MatDialogRef<UpdateUserDetailsComponent>, 
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.registerForm = this.fb.group({
      id: [''],
      name: [''],
      password: [''],
      email: [''],
      gender: [''],
      role: ['', Validators.required],
      isActive: ['false']
    });
    this.service.getRoleList().subscribe(res => {
      this.roleList = res;
    });
  }
  ngOnInit(): void {
    if (this.data.userCode != '' && this.data.userCode != null) {
      this.loaduserdata(this.data.userCode);
    }
  }
  loaduserdata(code: any) {
    this.service.getUserbyCode(code).subscribe(res => {
      this.editdata = res;
      console.log(this.editdata);
      this.registerForm.setValue({
        id: this.editdata.id, name: this.editdata.name,
        password: this.editdata.password, email: this.editdata.email, gender: this.editdata.gender,
        role: this.editdata.role, isActive: this.editdata.isActive
      });
    });
  }
  updateUser() {
    this.service.updateUser(this.registerForm.value.id, this.registerForm.value).subscribe(res => {
      this.appService.success('Updated successfully.');
      this.dialogref.close();
    });
  }
  get role(): FormControl {
    return <FormControl>this.registerForm.get("email") as FormControl;
  }
}
