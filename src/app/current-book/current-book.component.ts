import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material';
import { CurrentBook } from '../model/currentBook.model';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-current-book',
  templateUrl: './current-book.component.html',
  styleUrls: ['./current-book.component.css']
})
export class CurrentBookComponent implements OnInit {

  books: CurrentBook[];
  dataSource = new MatTableDataSource(this.books);
  displayedColumns =
    ['name', 'author', 'startDate', 'action'];
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  value1 = '';
  value2 = '';
  value3 = '';
  didEditRow: number;
  database: string = 'currentBooks';

  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.apiService.get(this.database).subscribe((data: any[]) => {
      console.log(data);
      this.books = data;
      this.dataSource = new MatTableDataSource(this.books);
      this.dataSource.paginator = this.paginator;
    });
  }

  addRow() {
    const newBook = { id: this.books.length + 1, name: this.value1, author: this.value2, startDate: this.value3 };
    this.apiService.post(this.database, newBook).subscribe(() => {
      window.location.reload();
    });
  }

  dropRow(element) {
    this.apiService.get('droppedBooks').subscribe((data: any[]) => {
      const droppedBooks = data;
      const now: Date = new Date();
      const droppedBook = {
        id: droppedBooks.length + 1, name: element.name, author: element.author, startDate: element.startDate, stopDate: now
      };
      this.apiService.post('droppedBooks', droppedBook).subscribe(() => {
      });
    });

    this.apiService.delete(this.database, element.id).subscribe(() => {
      this.apiService.get(this.database).subscribe((data: any[]) => {
        console.log(data);
        this.books = data;
        this.dataSource = new MatTableDataSource(this.books);
        this.dataSource.paginator = this.paginator;
      });
    });
  }

  finishRow(element) {
    this.apiService.get('finishedBooks').subscribe((data: any[]) => {
      const finishedBooks = data;
      const now: Date = new Date();
      const finishedBook = {
        id: finishedBooks.length + 1, name: element.name, author: element.author, startDate: element.startDate, endDate: now
      };
      this.apiService.post('finishedBooks', finishedBook).subscribe(() => {
      });
    });

    this.apiService.delete(this.database, element.id).subscribe(() => {
      this.apiService.get(this.database).subscribe((data: any[]) => {
        console.log(data);
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
