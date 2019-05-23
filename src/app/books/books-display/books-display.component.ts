import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

import { AuthService } from '../../auth/auth.service';
import { BookService } from '../book.service';
import { Book } from '../../models/book.model';
import { DataService } from '../../data.service';


@Component({
  selector: 'app-books-display',
  templateUrl: './books-display.component.html',
  styleUrls: ['./books-display.component.css']
})
export class BooksDisplayComponent implements OnInit {

  bookElement: Book;
  subscription: Subscription;
  clicked: boolean = false;

  constructor(private bookService: BookService,
              private authService: AuthService,
              private dataService: DataService) { }

  ngOnInit() {
    this.bookElement = this.bookService.getBook(0);
    this.subscription = this.bookService.bookToDisplay.subscribe(
      (bookElement: Book) =>{
        this.bookElement  = bookElement;
      }
    );
  }

  addtoBorrowList() {
    const book: Book[] = [];
    this.bookElement.issued = false;
    this.bookService.sendToBorrowList(this.bookElement);
    book.push(this.bookElement);
    this.dataService.addtoBorrowList(book);
  }
}
