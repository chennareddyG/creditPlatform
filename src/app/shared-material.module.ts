import { NgModule } from "@angular/core";
import { MatRadioModule } from "@angular/material/radio";
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatIconModule } from '@angular/material/icon'
import { MatDialogModule } from "@angular/material/dialog";

@NgModule({
    exports: [
        MatRadioModule,
        MatSnackBarModule,
        MatIconModule,
        MatDialogModule,
    ]
})

export class SharedMaterialModule {}