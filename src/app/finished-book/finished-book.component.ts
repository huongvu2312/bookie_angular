import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material';
import { FinishedBook } from '../model/finishedBook.model';
import { ApiService } from '../api.service';
import { Router } from '@angular/router';

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
  didEditRow: boolean = false;

  constructor(private apiService: ApiService, private router: Router) { }

  ngOnInit() {
    this.apiService.get().subscribe((data: any[]) => {
      console.log(data);
      this.books = data;
      this.dataSource = new MatTableDataSource(this.books);
      this.dataSource.paginator = this.paginator;
    });
  }

  addRow() {
    const newBook = { id: this.books.length + 1, name: this.value1, author: this.value2, startDate: this.value3, endDate: this.value4 };
    this.apiService.post(newBook).subscribe(() => {
      window.location.reload();
    });

  }

  deleteRow(index) {
    this.apiService.delete(index).subscribe(() => {
      this.apiService.get().subscribe((data: any[]) => {
        console.log(data);
        this.books = data;
        this.dataSource = new MatTableDataSource(this.books);
        this.dataSource.paginator = this.paginator;
      });
    });
  }

  editRow(der) {
    if (der === true) {
      return this.didEditRow = false;
    }
    return this.didEditRow = true;
  }

  saveEditedRow() {
    return this.didEditRow = false;
  }
}
