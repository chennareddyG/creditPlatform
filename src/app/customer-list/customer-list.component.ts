import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { CardService } from '../card.service';
import { FormBuilder } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { UpdateUserDetailsComponent } from '../update-user-details/update-user-details.component';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.scss']
})
export class CustomerListComponent {
  userList: any;
  cardsList: any;

  constructor(
    private formBuilder: FormBuilder,
    private service: AuthService,
    private dialog: MatDialog
  ) {
    this.loadUsers();
  }

  loadUsers() {
    this.service.getAll().subscribe(res => {
      this.userList = res;
    })
  }

  updateUser(code: any) {
    this.openDialog('1000ms', '600ms', code);
  }

  openDialog(enteranimation: any, exitanimation: any, code: string) {
    const popup = this.dialog.open(UpdateUserDetailsComponent, {
      enterAnimationDuration: enteranimation,
      exitAnimationDuration: exitanimation,
      width: '50%',
      data: {
        userCode: code
      }
    });
    popup.afterClosed().subscribe(res => {
      this.loadUsers();
    });
  }

}
