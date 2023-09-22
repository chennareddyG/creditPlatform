import { Component,Inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { CardService } from '../card.service';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { AppService } from '../app.service';

@Component({
  selector: 'app-apply-card',
  templateUrl: './apply-card.component.html',
  styleUrls: ['./apply-card.component.scss']
})
export class ApplyCardComponent implements OnInit {
  registerForm: any;
  
  constructor(
    private fb: FormBuilder,
    private _cardService: CardService,
    private appService: AppService,
    private dialogref: MatDialogRef<ApplyCardComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
  }

  ngOnInit(): void {
    this.registerForm = this.createForm();
}

  createForm(): FormGroup {
    return this.fb.group({
      fullName: ['', [
        Validators.required,
        Validators.minLength(2),
        Validators.pattern("[a-zA-Z].*")
      ]],
      gender: ['', Validators.required],
      email: ['', [Validators.required,
         Validators.minLength(2),
         Validators.email,
         Validators.pattern(/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/)
        ]],
      panNumber: ['', [
         Validators.required,
         Validators.minLength(10),
         Validators.maxLength(10)
        ]],
      mobile: ['', [
         Validators.required,
         Validators.pattern("[0-9]*"),
         Validators.minLength(10),
         Validators.maxLength(10)
        ]],
      city: ['', Validators.required],
      employmentType: ['', Validators.required],
      salary: ['', Validators.required],
      company: [''],
      accountType: ['', Validators.required],
      birthday: ['', Validators.required],
      isApproved: [false],
      termsAndConditions:['', Validators.required],
    });
  }
  checkApproval(data: any) {
    if (data.salary > 500000 || (data.employmentType === 'selfEmployed' && data.salary > 600000)) {
      data['isApproved'] = true;
      const name = sessionStorage.getItem('userName');
      data['id'] = name;
    } else {
      data.isApproved = false;
    }
    return data;
  }
  registerSubmitted() {
  let input = this.checkApproval(this.registerForm.value);
  this._cardService.registerCard(this.registerForm.value)
  .subscribe(res => {
    this.appService.success('success');
    this.dialogref.close();
  })
  }
  get fullName(): FormControl {
    return <FormControl>this.registerForm.get("fullName") as FormControl;
  }
  get email(): FormControl {
    return <FormControl>this.registerForm.get("email") as FormControl;
  }
  get gender(): FormControl {
    return <FormControl>this.registerForm.get("gender") as FormControl;
  }
  get panNumber(): FormControl {
    return <FormControl>this.registerForm.get("panNumber") as FormControl;
  }
  get mobile(): FormControl {
    return <FormControl>this.registerForm.get("mobile") as FormControl;
  }
  get employmentType(): FormControl {
    return <FormControl>this.registerForm.get("employmentType") as FormControl;
  }
  get salary(): FormControl {
    return <FormControl>this.registerForm.get("salary") as FormControl;
  }
  get city(): FormControl {
    return <FormControl>this.registerForm.get("city") as FormControl;
  }
  get accountType(): FormControl {
    return <FormControl>this.registerForm.get("accountType") as FormControl;
  }
  get birthday(): FormControl {
    return <FormControl>this.registerForm.get("birthday") as FormControl;
  }
  get termsAndConditions(): FormControl {
    return <FormControl>this.registerForm.get("termsAndConditions") as FormControl;
  }
}
