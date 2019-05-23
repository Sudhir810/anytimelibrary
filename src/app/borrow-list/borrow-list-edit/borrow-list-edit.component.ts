import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

import { Book } from '../../models/book.model';
import { BookService } from '../../books/book.service';
import { DataService } from '../../data.service';

@Component({
  selector: 'app-borrow-list-edit',
  templateUrl: './borrow-list-edit.component.html',
  styleUrls: ['./borrow-list-edit.component.css']
})
export class BorrowListEditComponent implements OnInit {

  bookElement: Book;
  subscription: Subscription;
  clicked: boolean = true;

  constructor(private bookService: BookService,
              private dataService: DataService) { }

  ngOnInit() {
    this.bookElement = this.bookService.getBook(0);
    this.subscription = this.bookService.bookToDisplay.subscribe(
      (bookElement: Book) =>{
        this.bookElement  = bookElement;
      }
    );
  }

  removeFromBorrowList(){
    this.bookElement.issued = true;
    this.dataService.removeFromBorrowList(this.bookElement);
  }
}
