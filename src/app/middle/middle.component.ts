import { Component, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { ModalComponent } from '../modal/modal.component';
import * as $ from 'jquery';
export interface Tile {
  color: string;
  cols: number;
  rows: number;
  text: string;
}
/** * @title Dynamic grid-list */

@Component({
  selector : 'app-middle',
  templateUrl : './middle.component.html',
  styleUrls : ['./middle.component.scss'],
})


export class MiddleComponent {
  tiles: Tile [] = [
    {text: 'One', cols: 3, rows: 1, color: 'lightblue'},
    {text: 'Two', cols: 1, rows: 2, color: 'lightgreen'},
    {text: 'Three', cols: 1, rows: 1, color: 'lightpink'},
    {text: 'Four', cols: 2, rows: 1, color: '#DDBDF1'},
  ];
//   public ngOnInit() {
//     $(document).ready(function() {
//         $('#btnTest').click(function () {
//           (<any>$('.modal')).modal('show');
//       });
//     });
// }


animal: string;
  name: string;

  constructor(public dialog: MatDialog) {}
  openDialog(): void {
    const dialogRef = this.dialog.open(ModalComponent, {
      width: '250px',
      // data: {name: this.name, animal: this.animal}
    });

    dialogRef.afterClosed().subscribe(result => {
      this.animal = result;
    });
}
}
