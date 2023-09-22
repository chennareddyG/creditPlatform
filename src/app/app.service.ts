import { Injectable, NgZone } from '@angular/core';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material/snack-bar';
import { InfoCardComponent } from './info-card/info-card.component';

@Injectable({
  providedIn: 'root',
})
export class AppService {
  private config: MatSnackBarConfig;
  progressValue: number = 0;
  showProgressBar: boolean = false;
  toggleProgress: boolean = false;
  color = '#0091e5';
  errorColor = '';

  constructor(
    private snackbar: MatSnackBar,
    private zone: NgZone
    ) {
    this.config = new MatSnackBarConfig();
    this.config.panelClass = ["snackbar-container"];
    this.config.verticalPosition = "top";
    this.config.horizontalPosition = "right";
    this.config.duration = 3000;
  }
  error(message: string) {
    this.config.panelClass = ["snackbar-container", "error"];
    this.show(message);
  }

  success(message: string) {
    this.config.panelClass = ["snackbar-container", "success"];
    this.show(message);
  }

  warning(message: string) {
    this.config.panelClass = ["snackbar-container", "warning"];
    this.show(message);
  }

  private show(message: string, config?: MatSnackBarConfig) {
    config = config || this.config;
    this.zone.run(() => {
      this.snackbar.open(message, "x", config);
    });
  }
}
