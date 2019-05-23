import { Component, OnInit } from '@angular/core';
import { Response } from '@angular/http';
import { Subscription } from 'rxjs';

import { DataService } from '../../data.service';
import { Book } from '../../models/book.model';
import { BookService } from '../book.service';

@Component({
  selector: 'app-books-list',
  templateUrl: './books-list.component.html',
  styleUrls: ['./books-list.component.css']
})
export class BooksListComponent implements OnInit {

  books: Book[];
  subscription: Subscription;

  constructor(private dataService: DataService, private bookService: BookService) { }

  ngOnInit() {
    this.subscription = this.bookService.booksChanged.subscribe(
      (books: Book[]) =>{
        this.books  = books
      }
    );
    this.dataService.getBooks();
    // this.books = this.bookService.getBooks();
  }
}
