import { Component, Inject, OnInit } from '@angular/core';
import { MAT_SNACK_BAR_DATA, MatSnackBarRef } from '@angular/material/snack-bar';

@Component({
  selector: 'app-info-card',
  templateUrl: './info-card.component.html',
  styleUrls: ['./info-card.component.scss']
})
export class InfoCardComponent {
  constructor(
    public sbRef: MatSnackBarRef<InfoCardComponent>,
    @Inject(MAT_SNACK_BAR_DATA) public data: any
  ) {

  }

}
