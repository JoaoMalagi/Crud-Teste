import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogBodyComponent } from './dialog-body.component';

@Injectable({
  providedIn: 'root'
})
export class DialogBodyService {

  constructor(private dialog: MatDialog) { }

  openDialog() {
    let dialogRef = this.dialog.open(DialogBodyComponent);

    }  
}
