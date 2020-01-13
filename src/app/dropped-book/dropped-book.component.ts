import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material';
import { DroppedBook } from '../model/droppedBook.model';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-dropped-book',
  templateUrl: './dropped-book.component.html',
  styleUrls: ['./dropped-book.component.css']
})
export class DroppedBookComponent implements OnInit {
  books: DroppedBook[];
  dataSource = new MatTableDataSource(this.books);
  displayedColumns =
    ['name', 'author', 'startDate', 'stopDate', 'action'];
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  value1 = '';
  value2 = '';
  value3 = '';
  value4 = '';
  didEditRow: number;
  database: string = 'droppedBooks';

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
    const newBook = { id: this.books.length + 1, name: this.value1, author: this.value2, startDate: this.value3, stopDate: this.value4 };
    this.apiService.post(this.database, newBook).subscribe(() => {
      window.location.reload();
    });
  }

  readAgainRow(element) {
    this.apiService.get('currentBooks').subscribe((data: any[]) => {
      const currentBooks = data;

      const now: Date = new Date();
      const currentBook = { id: currentBooks.length + 1, name: element.name, author: element.author, startDate: now};
      console.log(currentBook);
      this.apiService.post('currentBooks', currentBook).subscribe(() => {
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
