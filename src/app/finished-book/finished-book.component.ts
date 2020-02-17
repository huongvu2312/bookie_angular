import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material';
import { FinishedBook } from '../model/finishedBook.model';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-finished-book',
  templateUrl: './finished-book.component.html',
  styleUrls: ['./finished-book.component.css']
})

export class FinishedBookComponent implements OnInit {
  books: FinishedBook[];
  dataSource = new MatTableDataSource(this.books);
  displayedColumns =
    ['name', 'author', 'startDate', 'endDate', 'action'];
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  value1 = '';
  value2 = '';
  value3 = '';
  value4 = '';
  didEditRow: number;
  database: string = 'finishedBooks';

  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.apiService.get(this.database).subscribe((data: any[]) => {
      this.books = data;
      this.dataSource = new MatTableDataSource(this.books);
      this.dataSource.paginator = this.paginator;
    });
  }

  addRow() {
    const newBook = { id: this.books.length + 1, name: this.value1, author: this.value2, startDate: this.value3, endDate: this.value4 };
    this.apiService.post(this.database, newBook).subscribe(() => {
      // window.location.reload();
      this.apiService.get(this.database).subscribe((data: any[]) => {
        this.books = data;
        this.dataSource = new MatTableDataSource(this.books);
        this.dataSource.paginator = this.paginator;
      });
      this.value1 = '';
      this.value2 = '';
      this.value3 = '';
      this.value4 = '';
    });
  }

  deleteRow(index) {
    this.apiService.delete(this.database, index).subscribe(() => {
      this.apiService.get(this.database).subscribe((data: any[]) => {
        this.books = data;
        this.dataSource = new MatTableDataSource(this.books);
        this.dataSource.paginator = this.paginator;
      });
    });
  }

  editRow(index) {
    return this.didEditRow = index;
  }

  cancelEditRow() {
    return this.didEditRow = -1;
  }

  saveEditedRow(element) {
    this.apiService.put(this.database, element).subscribe(() => {
      this.apiService.get(this.database).subscribe((data: any[]) => {
        this.books = data;
        this.dataSource = new MatTableDataSource(this.books);
        this.dataSource.paginator = this.paginator;
        this.didEditRow = -1;
      });
    });
  }
}
