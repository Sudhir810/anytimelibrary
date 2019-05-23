import { Component, OnInit } from '@angular/core';
import { Book } from '../models/book.model';
import { Subscription } from 'rxjs';
import { BorrowService } from './borrowlist.service';
import { DataService } from '../data.service';
import { BookService } from '../books/book.service';

@Component({
  selector: 'app-borrowlist',
  templateUrl: './borrowlist.component.html',
  styleUrls: ['./borrowlist.component.css']
})
export class BorrowlistComponent implements OnInit {

  books:Book[];
  private subscription: Subscription;

  constructor(private borrowService: BorrowService,
              private dataService: DataService,
              private bookService: BookService) { }

  ngOnInit() {
  
    this.dataService.getBorrowedBooks().then(
      (book) =>{
        this.books = book;
      }
    );
  }

  onDisplayItem(index: number){
    //console.log(this.bookService.getBook(this.index));
    this.bookService.bookToDisplay.next(this.books[index]);
  }
}
