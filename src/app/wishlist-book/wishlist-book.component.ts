import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material';
import { WishlistBook } from '../model/wishlistBook.model';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-wishlist-book',
  templateUrl: './wishlist-book.component.html',
  styleUrls: ['./wishlist-book.component.css']
})
export class WishlistBookComponent implements OnInit {

  books: WishlistBook[];
  dataSource = new MatTableDataSource(this.books);
  displayedColumns =
    ['name', 'author', 'action'];
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  value1 = '';
  value2 = '';
  didEditRow: number;
  database: string = 'wishlistBooks';

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
    const newBook = { id: this.books.length + 1, name: this.value1, author: this.value2 };
    console.log(this.books.length + 1);
    this.apiService.post(this.database, newBook).subscribe(() => {
      window.location.reload();
    });
  }

  deleteRow(element) {
    this.apiService.delete(this.database, element.id).subscribe(() => {
      this.apiService.get(this.database).subscribe((data: any[]) => {
        console.log(data);
        this.books = data;
        this.dataSource = new MatTableDataSource(this.books);
        this.dataSource.paginator = this.paginator;
      });
    });
  }

  currentRow(element) {
    this.apiService.get('currentBooks').subscribe((data: any[]) => {
      const currentBooks = data;
      const now: Date = new Date();
      const currentBook = {
        id: currentBooks.length + 1, name: element.name, author: element.author, startDate: now
      };
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
