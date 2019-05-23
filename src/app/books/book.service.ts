import { Subject } from 'rxjs';
import { Injectable } from '@angular/core';

import { BorrowService } from '../borrow-list/borrowlist.service';
import { DataService } from '../data.service';
import { Book } from '../models/book.model';
import { AuthService } from '../auth/auth.service'

@Injectable()
export class BookService {

  bookToDisplay = new Subject<Book>();
  private books: Book[] = [];
  private borrowedBooks: Book[] = [];
  booksChanged = new Subject<Book[]>();

  constructor(private borrowService: BorrowService,
              private authService: AuthService){}
  getBooks(){
    return this.books.slice();
  }

  getBook(id: number){
    return this.books[id];
  }

  setBooks(data: Book[]){
    this.books = data;
    this.booksChanged.next(this.books.slice());
  }

  sendToBorrowList(bookElement: Book){
    this.borrowService.onBookAdded(bookElement);
  }

}
