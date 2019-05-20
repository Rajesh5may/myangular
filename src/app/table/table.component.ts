import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { ModalComponent } from '../modal/modal.component';
export interface PeriodicElement {
  name: string;
  position: number;
  email: string;
  symbol: string;
}

const newLocal = 'Hydrogen';
const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: newLocal, email: 'test@dot.com', symbol: 'H'},
  {position: 2, name: 'Helium', email: 'test@dot.com', symbol: 'He'},
  {position: 3, name: 'Lithium', email: 'test@dot.com', symbol: 'Li'},
  {position: 4, name: 'Beryllium', email: 'test@dot.com', symbol: 'Be'},
  {position: 5, name: 'Boron', email: 'test@dot.com', symbol: 'B'},
  {position: 6, name: 'Carbon', email: 'test@dot.com', symbol: 'C'},
  {position: 7, name: 'Nitrogen', email: 'test@dot.com', symbol: 'N'},
  {position: 8, name: 'Oxygen', email: 'test@dot.com', symbol: 'O'},
  {position: 9, name: 'Fluorine', email: 'test@dot.com', symbol: 'F'},
  {position: 10, name: 'Neon', email: 'test@dot.com', symbol: 'Ne'},
];

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {
  displayedColumns: string[] = ['position', 'name', 'email', 'symbol'];
  dataSource = ELEMENT_DATA;
  constructor(public dialog: MatDialog) {}
  openDialog(): void {
    const dialogRef = this.dialog.open(ModalComponent, {
      width: '250px',
      // data: {name: this.name, animal: this.animal}
    });

    dialogRef.afterClosed().subscribe(result => {
      // this.animal = result;
    });
}
  ngOnInit() {
  }

}


