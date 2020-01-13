import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material';

@Component({
  selector: 'app-finished-book',
  templateUrl: './finished-book.component.html',
  styleUrls: ['./finished-book.component.css']
})

export class FinishedBookComponent {
  displayedColumns =
    ['name', 'author', 'startDate', 'endDate', 'action'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);
  value1 = '';
  value2 = '';
  value3 = '';
  value4 = '';

  addRow() {
    ELEMENT_DATA.push({ name: this.value1, author: this.value2, startDate: this.value3, endDate: this.value4 });
    this.dataSource = new MatTableDataSource(ELEMENT_DATA);
  }

  deleteRow(el) {
    for (let element of ELEMENT_DATA) {
      if (element === el) {
        var index = ELEMENT_DATA.indexOf(el);
        ELEMENT_DATA.splice(index, 1);
      }
    }

    this.dataSource = new MatTableDataSource(ELEMENT_DATA);
  }

  editRow(el) {

  }
}

export interface BookElement {
  name: string;
  author: string;
  startDate: string;
  endDate: string;
}

const ELEMENT_DATA: BookElement[] = [
  { name: 'a', author: 'Hydrogen', startDate: 'q', endDate: 'H' },
  { name: 'b', author: 'Helium', startDate: '4.0026', endDate: 'He' },
  { name: 'c', author: 'Lithium', startDate: '6.941', endDate: 'Li' },
  { name: 'd', author: 'Beryllium', startDate: '9.0122', endDate: 'Be' },
  { name: 'e', author: 'Boron', startDate: '10.811', endDate: 'B' },
  { name: 'f', author: 'Carbon', startDate: '12.0107', endDate: 'C' },
  { name: 'g', author: 'Nitrogen', startDate: '14.0067', endDate: 'N' },
  { name: 'h', author: 'Oxygen', startDate: '15.9994', endDate: 'O' },
  { name: 'i', author: 'Fluorine', startDate: '18.9984', endDate: 'F' },
  { name: 'k', author: 'Neon', startDate: '20.1797', endDate: 'Ne' },
];
