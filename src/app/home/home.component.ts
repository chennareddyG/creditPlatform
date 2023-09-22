import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { AppService } from '../app.service';
import { CardService } from '../card.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  availableCards: any;
  role: any;
  constructor(
    private cardService: CardService,
    private appService: AppService
  ) {
    this.loadUsers();
    this.role = sessionStorage.getItem('userRole');
  }

  loadUsers() {
    this.cardService.getAppliedCards().subscribe(res => {
      this.availableCards = res;
    })
  }

  approveCard(code: any, card: any) {
    const isApproved = card['isApproved'];
    card['isApproved'] = !card['isApproved'];
    this.cardService.updateCardStatus(code, card).subscribe(res => {
      this.appService.success(`The credit for ${card['fullName']} is ${isApproved ? 'Declined': 'Approved'}`);
      this.loadUsers();
    })
  }
}
