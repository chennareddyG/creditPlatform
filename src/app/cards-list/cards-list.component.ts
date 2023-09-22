import { Component, OnInit } from '@angular/core';
import { CardService } from '../card.service';
import { MatDialog } from '@angular/material/dialog';
import { ApplyCardComponent } from '../apply-card/apply-card.component';

@Component({
  selector: 'app-cards-list',
  templateUrl: './cards-list.component.html',
  styleUrls: ['./cards-list.component.scss']
})
export class CardsListComponent implements OnInit{

  cardsList: any;
  constructor(
    private _cardService: CardService,
    private dialog: MatDialog
  ) {
    this.fetchData();
  }

  ngOnInit(): void {
  }
  fetchData() {
    this._cardService.getCardList().subscribe(res => {
      if(res) {
        this.cardsList = res;
      }      
    })
  }
  getImageUrl(id: number) {
    return `https://picsum.photos/id/${id}/300/200`;
  }
  registerCard(code: any) {
    this.OpenDialog('1000ms', '600ms', code);
  }

  OpenDialog(enteranimation: any, exitanimation: any, code: string) {
    const popup = this.dialog.open(ApplyCardComponent, {
      enterAnimationDuration: enteranimation,
      exitAnimationDuration: exitanimation,
      width: '400px',
      height: '450px',
      data: {
        usercode: code
      }
    });
    popup.afterClosed().subscribe(res => {
      this.fetchData();
    });
  }
}
